import React, { useCallback, useMemo, useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { Stack } from 'expo-router';

import { Screen, AppText, Loading, ErrorView, EmptyState } from '@/components';
import { AuthFormField } from '@/components/ui/AuthFormField';
import { DisciplinePicker } from '@/components/ui/DisciplinePicker';
import { ShopAddressFields } from '@/components/ui/ShopAddressFields';
import { Tag } from '@/components/ui/Tag';
import {
  ADMIN_ACCESS_PIN,
  APPLICATION_STATUS_LABELS,
  BENGAL_REGIONS,
  DISCIPLINE_TYPES,
  disciplineToType,
  type CreatorDiscipline,
} from '@/constants/creator-onboarding';
import {
  buildShopAddress,
  EMPTY_SHOP_ADDRESS,
  formatShopAddress,
  isShopAddressComplete,
} from '@/constants/shop-address';
import { useAsync } from '@/hooks/useAsync';
import {
  createScoutedCreator,
  listCreatorApplications,
  updateCreatorApplication,
} from '@/services';
import type {
  BengalRegion,
  CreatorApplication,
  CreatorApplicationStatus,
  DisciplineType,
  ShopAddress,
} from '@/types';
import { brand } from '@/theme';

const STATUS_FLOW: CreatorApplicationStatus[] = [
  'submitted',
  'in_review',
  'interview_scheduled',
  'sample_requested',
  'sample_ordered',
  'approved',
  'declined',
  'published',
  'suspended',
];

function showNotice(title: string, message: string) {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    return;
  }
  Alert.alert(title, message);
}

function ApplicationRow({
  item,
  selected,
  onPress,
}: {
  item: CreatorApplication;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-2xl p-md mb-md border"
      style={{
        backgroundColor: selected ? brand.surface : brand.surfaceAlt,
        borderColor: selected ? brand.marigold : brand.border,
      }}
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-md">
          <AppText variant="title">{item.name}</AppText>
          <AppText variant="caption" numberOfLines={1}>
            {item.discipline}
          </AppText>
          <AppText variant="caption" className="mt-xs">
            {item.email}
          </AppText>
        </View>
        <View className="items-end gap-1">
          <Tag
            label={APPLICATION_STATUS_LABELS[item.status]}
            active={item.status === 'approved' || item.status === 'published'}
          />
          <AppText variant="caption" className="text-brand-ivory-soft">
            {item.source === 'scouted' ? 'Scouted' : 'Applied'}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}

function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  const unlock = () => {
    if (pin.trim() === ADMIN_ACCESS_PIN) {
      setError(null);
      onUnlock();
      return;
    }
    setError('Incorrect PIN.');
  };

  return (
    <View className="px-xl pt-xl flex-1 justify-center">
      <AppText variant="h2">Creator pipeline</AppText>
      <AppText variant="body" className="mt-xs" style={{ lineHeight: 26 }}>
        Founder-only tracker for applications and scouted leads. Change the PIN
        in src/constants/admin.ts.
      </AppText>
      <AuthFormField
        label="Access PIN"
        value={pin}
        onChangeText={setPin}
        placeholder="Enter PIN"
        secureTextEntry
        autoCapitalize="none"
      />
      {error ? (
        <AppText variant="caption" className="mb-sm text-brand-vermillion">
          {error}
        </AppText>
      ) : null}
      <Pressable
        onPress={unlock}
        className="rounded-xl py-md items-center"
        style={{ backgroundColor: brand.marigold }}
      >
        <AppText variant="label" style={{ color: brand.ink }}>
          Unlock tracker
        </AppText>
      </Pressable>
    </View>
  );
}

export default function AdminApplicationsScreen() {
  const [unlocked, setUnlocked] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'application' | 'scouted'>('all');
  const [notesDraft, setNotesDraft] = useState('');
  const [saving, setSaving] = useState(false);
  const [showScoutForm, setShowScoutForm] = useState(false);

  const { data, loading, error, reload } = useAsync(
    () => (unlocked ? listCreatorApplications() : Promise.resolve([])),
    [unlocked],
  );

  const applications = data ?? [];

  const filtered = useMemo(() => {
    if (filter === 'all') return applications;
    return applications.filter((a) => a.source === filter);
  }, [applications, filter]);

  const selected = applications.find((a) => a.id === selectedId) ?? null;

  const selectItem = useCallback((item: CreatorApplication) => {
    setSelectedId(item.id);
    setNotesDraft(item.adminNotes ?? '');
  }, []);

  const saveNotes = async () => {
    if (!selected || saving) return;
    setSaving(true);
    try {
      await updateCreatorApplication(selected.id, { adminNotes: notesDraft.trim() });
      reload();
      showNotice('Saved', 'Notes updated.');
    } catch {
      showNotice('Error', 'Could not save notes.');
    } finally {
      setSaving(false);
    }
  };

  const setStatus = async (status: CreatorApplicationStatus) => {
    if (!selected || saving) return;
    setSaving(true);
    try {
      await updateCreatorApplication(selected.id, { status });
      reload();
    } catch {
      showNotice('Error', 'Could not update status.');
    } finally {
      setSaving(false);
    }
  };

  if (!unlocked) {
    return (
      <>
        <Stack.Screen options={{ title: 'Creator pipeline', headerShown: true }} />
        <Screen edges={['bottom']}>
          <PinGate onUnlock={() => setUnlocked(true)} />
        </Screen>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Creator pipeline', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="h2">Applications & scouting</AppText>
          <AppText variant="body" className="mt-xs" style={{ lineHeight: 24 }}>
            Review self-serve submissions and add Instagram leads without an
            application. Vetting (calls, samples) stays offline — update status
            here to track progress.
          </AppText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingVertical: 16 }}
          >
            {(
              [
                { key: 'all', label: 'All' },
                { key: 'application', label: 'Applied' },
                { key: 'scouted', label: 'Scouted' },
              ] as const
            ).map((f) => (
              <Pressable key={f.key} onPress={() => setFilter(f.key)}>
                <Tag label={f.label} active={filter === f.key} />
              </Pressable>
            ))}
          </ScrollView>

          <Pressable
            onPress={() => setShowScoutForm((v) => !v)}
            className="rounded-xl border border-brand-border py-md items-center mb-lg"
          >
            <AppText variant="label" className="text-brand-marigold">
              {showScoutForm ? 'Hide scout form' : '+ Add scouted creator'}
            </AppText>
          </Pressable>

          {showScoutForm ? (
            <ScoutForm
              onCreated={() => {
                setShowScoutForm(false);
                reload();
              }}
            />
          ) : null}
        </View>

        {loading ? (
          <Loading label="Loading applications…" />
        ) : error ? (
          <ErrorView onRetry={reload} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No applications yet"
            subtitle="Submissions from the apply form and scouted leads will appear here."
          />
        ) : (
          <View className="px-xl">
            {filtered.map((item) => (
              <ApplicationRow
                key={item.id}
                item={item}
                selected={selectedId === item.id}
                onPress={() => selectItem(item)}
              />
            ))}
          </View>
        )}

        {selected ? (
          <View className="px-xl mt-lg pt-lg border-t border-brand-border">
            <AppText variant="h3">{selected.name}</AppText>
            <AppText variant="caption" className="mt-xs">
              {selected.source === 'scouted' && selected.scoutedFrom
                ? `Scouted from ${selected.scoutedFrom}`
                : 'Self-serve application'}
            </AppText>
            <AppText variant="body" className="mt-md">
              {selected.bio}
            </AppText>
            {selected.story ? (
              <AppText variant="body" className="mt-sm text-brand-ivory-soft">
                {selected.story}
              </AppText>
            ) : null}
            {selected.instagramUrl ? (
              <AppText variant="caption" className="mt-sm">
                Instagram: {selected.instagramUrl}
              </AppText>
            ) : null}
            {selected.portfolioUrl ? (
              <AppText variant="caption" className="mt-xs">
                Portfolio: {selected.portfolioUrl}
              </AppText>
            ) : null}
            {selected.shopAddress ? (
              <AppText variant="caption" className="mt-xs">
                Shop: {formatShopAddress(selected.shopAddress)}
              </AppText>
            ) : null}
            {selected.sampleDescription ? (
              <AppText variant="caption" className="mt-xs">
                Sample: {selected.sampleDescription}
              </AppText>
            ) : null}

            <AppText variant="label" className="mt-lg mb-sm text-brand-ivory-soft">
              Status
            </AppText>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
            >
              {STATUS_FLOW.map((status) => (
                <Pressable key={status} onPress={() => setStatus(status)}>
                  <Tag
                    label={APPLICATION_STATUS_LABELS[status]}
                    active={selected.status === status}
                  />
                </Pressable>
              ))}
            </ScrollView>

            <AppText variant="label" className="mt-md mb-sm text-brand-ivory-soft">
              Internal notes
            </AppText>
            <TextInput
              value={notesDraft}
              onChangeText={setNotesDraft}
              placeholder="Call notes, sample order ref, vision fit…"
              placeholderTextColor={brand['ivory-muted']}
              multiline
              textAlignVertical="top"
              className="rounded-xl border border-brand-border px-md text-brand-ivory font-sans"
              style={{
                backgroundColor: brand.surface,
                fontSize: 15,
                lineHeight: 22,
                paddingVertical: 12,
                minHeight: 100,
              }}
            />
            <Pressable
              onPress={saveNotes}
              disabled={saving}
              className="rounded-xl py-md items-center mt-md"
              style={{ backgroundColor: brand.marigold }}
            >
              <AppText variant="label" style={{ color: brand.ink }}>
                {saving ? 'Saving…' : 'Save notes'}
              </AppText>
            </Pressable>

            <AppText variant="caption" className="mt-md text-brand-ivory-soft">
              Publishing to a live profile still happens manually in Phase 1 —
              add approved creators to src/data/creators.ts until the API ships.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}

function ScoutForm({ onCreated }: { onCreated: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scoutedFrom, setScoutedFrom] = useState('');
  const [discipline, setDiscipline] = useState<CreatorDiscipline | null>(null);
  const [disciplineType, setDisciplineType] = useState<DisciplineType>('physical');
  const [region, setRegion] = useState<BengalRegion>('Kolkata');
  const [bio, setBio] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [shopAddress, setShopAddress] = useState<ShopAddress>(EMPTY_SHOP_ADDRESS);
  const [adminNotes, setAdminNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    const trimmedName = name.trim();
    const trimmedFrom = scoutedFrom.trim();
    const trimmedDiscipline = discipline;
    const trimmedBio = bio.trim();

    if (!trimmedName || !trimmedFrom || !trimmedDiscipline || !trimmedBio) {
      showNotice('Missing fields', 'Name, scouted from, discipline, and bio are required.');
      return;
    }

    if (disciplineType === 'physical' && !isShopAddressComplete(shopAddress)) {
      showNotice(
        'Shop location',
        'Physical shops need town, state, zip code, and country.',
      );
      return;
    }

    setSubmitting(true);
    try {
      await createScoutedCreator({
        name: trimmedName,
        email: email.trim() || 'scouted@pending.local',
        scoutedFrom: trimmedFrom,
        discipline: trimmedDiscipline,
        disciplineType,
        region,
        bio: trimmedBio,
        instagramUrl: instagramUrl.trim() || undefined,
        shopAddress: buildShopAddress(disciplineType, shopAddress),
        adminNotes: adminNotes.trim() || undefined,
        status: 'in_review',
      });
      onCreated();
      showNotice('Added', `${trimmedName} is in your pipeline as a scouted lead.`);
    } catch {
      showNotice('Error', 'Could not add scouted creator.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="mb-xl rounded-2xl border border-brand-border p-md">
      <AppText variant="title" className="mb-md">
        Scouted creator
      </AppText>
      <AppText variant="caption" className="mb-md">
        Skip the public application — use when you find someone on Instagram or
        through your network.
      </AppText>
      <AuthFormField
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Creator or studio name"
        autoCapitalize="words"
      />
      <AuthFormField
        label="Scouted from"
        value={scoutedFrom}
        onChangeText={setScoutedFrom}
        placeholder="@handle or how you found them"
      />
      <AuthFormField
        label="Email (optional)"
        value={email}
        onChangeText={setEmail}
        placeholder="If known"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <DisciplinePicker
        value={discipline}
        onChange={(next) => {
          setDiscipline(next);
          setDisciplineType(disciplineToType(next));
        }}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
      >
        {DISCIPLINE_TYPES.map((d) => (
          <Pressable key={d.key} onPress={() => setDisciplineType(d.key)}>
            <Tag label={d.label} active={disciplineType === d.key} />
          </Pressable>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
      >
        {BENGAL_REGIONS.map((r) => (
          <Pressable key={r} onPress={() => setRegion(r)}>
            <Tag label={r} active={region === r} />
          </Pressable>
        ))}
      </ScrollView>
      {disciplineType === 'physical' ? (
        <ShopAddressFields value={shopAddress} onChange={setShopAddress} />
      ) : null}
      <AuthFormField
        label="Short bio"
        value={bio}
        onChangeText={setBio}
        placeholder="What they make"
      />
      <AuthFormField
        label="Instagram URL (optional)"
        value={instagramUrl}
        onChangeText={setInstagramUrl}
        placeholder="https://instagram.com/…"
        autoCapitalize="none"
      />
      <AuthFormField
        label="Internal notes (optional)"
        value={adminNotes}
        onChangeText={setAdminNotes}
        placeholder="Why they fit, DM sent, etc."
      />
      <Pressable
        onPress={submit}
        disabled={submitting}
        className="rounded-xl py-md items-center mt-sm"
        style={{
          backgroundColor: submitting ? `${brand.marigold}88` : brand.marigold,
        }}
      >
        <AppText variant="label" style={{ color: brand.ink }}>
          {submitting ? 'Adding…' : 'Add to pipeline'}
        </AppText>
      </Pressable>
    </View>
  );
}
