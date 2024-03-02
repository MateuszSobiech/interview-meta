import { PARENT_IDS } from '../consts/ParentIds';
import { Item } from '../types/Item';

const initialItems: Item[] = [
  { id: 1, label: '1', checked: false, parentId: PARENT_IDS.A },
  { id: 2, label: '2', checked: false, parentId: PARENT_IDS.A },
  { id: 3, label: '3', checked: false, parentId: PARENT_IDS.A },
  { id: 4, label: '4', checked: false, parentId: PARENT_IDS.A },
];

export class ItemsApiService {
  private items: Item[] = [];

  private async fetchItems(): Promise<Item[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(initialItems);
      }, 2000);
    });
  }

  async getItems() {
    if (this.items.length === 0) {
      this.items = await this.fetchItems();
    }

    return this.items;
  }
}
