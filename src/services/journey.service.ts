/**
 * Journey Through Bengal — progress persistence + node status resolution.
 * AsyncStorage-backed; screens never import src/data directly.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { JourneyNode, JourneyNodeStatus, JourneyProgress } from '@/types';
import {
  journeyNodes,
  JOURNEY_NODE_ORDER,
  JOURNEY_FIRST_NODE_ID,
  JOURNEY_REWARD_SHOP_HOOK,
  JOURNEY_BONUS_ARTICLE_ID,
} from '@/data/journey';

const STORAGE_KEY = '@aklacholo/journey/v1';

export const JOURNEY_TOTAL_STOPS = JOURNEY_NODE_ORDER.length;

export const DEFAULT_JOURNEY_PROGRESS: JourneyProgress = {
  currentNodeId: JOURNEY_FIRST_NODE_ID,
  unlockedNodeIds: [JOURNEY_FIRST_NODE_ID],
  completedNodeIds: [],
  skippedOnboarding: false,
  onboardingSeen: false,
  rewardClaimed: false,
  bonusUnlocked: false,
};

async function readProgress(): Promise<JourneyProgress> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_JOURNEY_PROGRESS };
    const parsed = JSON.parse(raw) as Partial<JourneyProgress>;
    return {
      ...DEFAULT_JOURNEY_PROGRESS,
      ...parsed,
      unlockedNodeIds: parsed.unlockedNodeIds ?? DEFAULT_JOURNEY_PROGRESS.unlockedNodeIds,
      completedNodeIds: parsed.completedNodeIds ?? [],
    };
  } catch {
    return { ...DEFAULT_JOURNEY_PROGRESS };
  }
}

async function writeProgress(progress: JourneyProgress): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function deriveStatus(nodeId: string, progress: JourneyProgress): JourneyNodeStatus {
  if (!progress.unlockedNodeIds.includes(nodeId)) return 'locked';
  if (progress.currentNodeId === nodeId) return 'current';
  if (progress.completedNodeIds.includes(nodeId)) return 'completed';
  return 'unlocked';
}

function mergeNodes(progress: JourneyProgress): JourneyNode[] {
  return journeyNodes
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((node) => ({
      ...node,
      status: deriveStatus(node.id, progress),
    }));
}

function nextNodeId(afterId: string): string | null {
  const idx = JOURNEY_NODE_ORDER.indexOf(afterId);
  if (idx < 0 || idx >= JOURNEY_NODE_ORDER.length - 1) return null;
  return JOURNEY_NODE_ORDER[idx + 1] ?? null;
}

export function getJourneyProgress(): Promise<JourneyProgress> {
  return readProgress();
}

export async function getJourneyNodes(): Promise<JourneyNode[]> {
  const progress = await readProgress();
  return mergeNodes(progress);
}

export async function getJourneyNodeByArticleId(
  articleId: string,
): Promise<JourneyNode | null> {
  const nodes = await getJourneyNodes();
  return nodes.find((n) => n.articleId === articleId) ?? null;
}

export function shouldShowJourneyOnboarding(progress: JourneyProgress): boolean {
  return !progress.onboardingSeen && !progress.skippedOnboarding;
}

export async function startJourneyOnboarding(): Promise<JourneyProgress> {
  const progress = await readProgress();
  const next = { ...progress, onboardingSeen: true };
  await writeProgress(next);
  return next;
}

export async function skipJourneyOnboarding(): Promise<JourneyProgress> {
  const progress = await readProgress();
  const next = {
    ...progress,
    onboardingSeen: true,
    skippedOnboarding: true,
  };
  await writeProgress(next);
  return next;
}

/**
 * Mark a stop complete after the user views its linked article.
 * Unlocks the next stop and advances `currentNodeId`.
 */
export async function markJourneyNodeViewed(nodeId: string): Promise<JourneyProgress> {
  const progress = await readProgress();
  if (!progress.unlockedNodeIds.includes(nodeId)) return progress;
  if (progress.completedNodeIds.includes(nodeId)) return progress;

  const completedNodeIds = [...progress.completedNodeIds, nodeId];
  const nextId = nextNodeId(nodeId);

  let unlockedNodeIds = progress.unlockedNodeIds;
  let currentNodeId: string | null = progress.currentNodeId;
  let bonusUnlocked = progress.bonusUnlocked;

  if (nextId) {
    if (!unlockedNodeIds.includes(nextId)) {
      unlockedNodeIds = [...unlockedNodeIds, nextId];
    }
    currentNodeId = nextId;
  } else {
    currentNodeId = null;
    bonusUnlocked = true;
  }

  const next: JourneyProgress = {
    ...progress,
    completedNodeIds,
    unlockedNodeIds,
    currentNodeId,
    bonusUnlocked,
  };
  await writeProgress(next);
  return next;
}

export async function claimJourneyReward(): Promise<JourneyProgress> {
  const progress = await readProgress();
  if (progress.completedNodeIds.length < JOURNEY_TOTAL_STOPS) return progress;
  const next = { ...progress, rewardClaimed: true, bonusUnlocked: true };
  await writeProgress(next);
  return next;
}

/** Phase 2 — returns Shop discount code when commerce is live. */
export function getJourneyShopRewardHook() {
  return JOURNEY_REWARD_SHOP_HOOK;
}

export async function resetJourneyProgress(): Promise<JourneyProgress> {
  await writeProgress({ ...DEFAULT_JOURNEY_PROGRESS });
  return { ...DEFAULT_JOURNEY_PROGRESS };
}

export { JOURNEY_BONUS_ARTICLE_ID };

export function getJourneyDiscoveredCount(progress: JourneyProgress): number {
  return progress.completedNodeIds.length;
}

export function isJourneyComplete(progress: JourneyProgress): boolean {
  return progress.completedNodeIds.length >= JOURNEY_TOTAL_STOPS;
}
