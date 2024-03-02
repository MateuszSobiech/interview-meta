export const PARENT_IDS = {
  A: 'A',
  B: 'B',
} as const;

export type ParentIds = keyof typeof PARENT_IDS;
