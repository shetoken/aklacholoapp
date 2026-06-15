/** App-wide brand constants. */
export const APP = {
  name: 'AklaCholo',
  namePrefix: 'Akla',
  nameAccent: 'Cholo',
  tagline: 'Bengal, Everywhere',
  /** Used by section headers throughout Discover. */
  storyLabel: 'The Magic of Bengal',
} as const;

/** Simulated network latency (ms) for the mock service layer. */
export const MOCK_LATENCY = { min: 120, max: 320 } as const;
