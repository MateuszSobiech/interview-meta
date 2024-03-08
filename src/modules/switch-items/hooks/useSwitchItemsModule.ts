import { useEffect, useState } from 'react';
import { ItemsApiService } from '../api/ItemsApiService';
import { Item } from '../types/Item';

type State =
  | {
      type: 'loading';
    }
  | {
      type: 'ok';
      items: Item[];
    }
  | {
      type: 'error';
    };

export const useSwitchItemsModule = (service: ItemsApiService) => {
  const [state, setState] = useState<State>({ type: 'loading' });

  useEffect(() => {
    service
      .getItems()
      .then((data) => setState({ type: 'ok', items: data }))
      .catch(() => setState({ type: 'error' }));
  }, [service]);

  return state;
};
