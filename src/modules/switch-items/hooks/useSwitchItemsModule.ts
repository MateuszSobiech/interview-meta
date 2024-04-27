import { useEffect, useState } from 'react';
import { Item } from '../types/Item';
import { itemsServiece } from '../api/ItemsServiece';

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

export const useSwitchItemsModule = () => {
  const [state, setState] = useState<State>({ type: 'loading' });

  useEffect(() => {
    itemsServiece
      .getItems()
      .then((data) => setState({ type: 'ok', items: data }))
      .catch(() => setState({ type: 'error' }));
  }, []);

  return state;
};
