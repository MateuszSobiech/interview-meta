import { ParentIds } from "../consts/ParentIds";

export interface Item {
  id: number;
  label: string;
  checked: boolean;
  parentId: ParentIds;
}