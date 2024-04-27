import { PARENT_IDS } from "../consts/ParentIds";

export type ParentIds = keyof typeof PARENT_IDS;

export interface Item {
  id: number;
  label: string;
  checked: boolean;
  parentId: ParentIds;
}