import { PARENT_IDS } from '../consts/ParentIds';
import { Item } from '../types/Item';

// BACKEND DATA
const initialItems: Item[] = [
  { id: 1, label: '1', checked: false, parentId: PARENT_IDS.A },
  { id: 2, label: '2', checked: false, parentId: PARENT_IDS.A },
  { id: 3, label: '3', checked: false, parentId: PARENT_IDS.A },
  { id: 4, label: '4', checked: false, parentId: PARENT_IDS.A },
];
// end BACKEND DATA

let items: Item[] = [];

const fetchItems = async (): Promise<Item[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(initialItems);
    }, 2000);
  });
};

export const itemsServiece = {
  async getItems() {
    if (items.length === 0) {
      items = await fetchItems();
    }

    return items;
  },
};
