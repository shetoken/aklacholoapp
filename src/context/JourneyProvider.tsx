import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { JourneyNode, JourneyProgress } from '@/types';
import {
  getJourneyNodes,
  getJourneyProgress,
  markJourneyNodeViewed as markViewedService,
  skipJourneyOnboarding as skipService,
  startJourneyOnboarding as startService,
  claimJourneyReward as claimService,
  JOURNEY_TOTAL_STOPS,
  getJourneyDiscoveredCount,
  isJourneyComplete,
} from '@/services';

interface JourneyContextValue {
  nodes: JourneyNode[];
  progress: JourneyProgress | null;
  ready: boolean;
  totalStops: number;
  discoveredCount: number;
  complete: boolean;
  refresh: () => Promise<void>;
  markNodeViewed: (nodeId: string) => Promise<void>;
  skipOnboarding: () => Promise<void>;
  startOnboarding: () => Promise<void>;
  claimReward: () => Promise<void>;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [nodes, setNodes] = useState<JourneyNode[]>([]);
  const [progress, setProgress] = useState<JourneyProgress | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    const [n, p] = await Promise.all([getJourneyNodes(), getJourneyProgress()]);
    setNodes(n);
    setProgress(p);
    setReady(true);
  }, []);

  useEffect(() => {
    refresh().catch(() => setReady(true));
  }, [refresh]);

  const markNodeViewed = useCallback(
    async (nodeId: string) => {
      const next = await markViewedService(nodeId);
      setProgress(next);
      setNodes(await getJourneyNodes());
    },
    [],
  );

  const skipOnboarding = useCallback(async () => {
    const next = await skipService();
    setProgress(next);
  }, []);

  const startOnboarding = useCallback(async () => {
    const next = await startService();
    setProgress(next);
  }, []);

  const claimReward = useCallback(async () => {
    const next = await claimService();
    setProgress(next);
  }, []);

  const discoveredCount = progress ? getJourneyDiscoveredCount(progress) : 0;
  const complete = progress ? isJourneyComplete(progress) : false;

  const value = useMemo(
    () => ({
      nodes,
      progress,
      ready,
      totalStops: JOURNEY_TOTAL_STOPS,
      discoveredCount,
      complete,
      refresh,
      markNodeViewed,
      skipOnboarding,
      startOnboarding,
      claimReward,
    }),
    [
      nodes,
      progress,
      ready,
      discoveredCount,
      complete,
      refresh,
      markNodeViewed,
      skipOnboarding,
      startOnboarding,
      claimReward,
    ],
  );

  return (
    <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
  );
}

export function useJourney(): JourneyContextValue {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error('useJourney must be used within JourneyProvider');
  return ctx;
}
