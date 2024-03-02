import { FC, useEffect, useState } from 'react';
import { ItemsView } from './views/ItemsView/ItemsView';
import { ItemsApiService } from './api/ItemsApiService';
import { Item } from './types/Item';

type AppState =
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

interface AppProps {
  service: ItemsApiService;
}

export const App: FC<AppProps> = ({ service }) => {
  const [state, setState] = useState<AppState>({ type: 'loading' });

  useEffect(() => {
    service
      .getItems()
      .then((data) => setState({ type: 'ok', items: data }))
      .catch(() => setState({ type: 'error' }));
  }, [service]);

  switch (state.type) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'ok':
      return <ItemsView initialItems={state.items} />;
    case 'error':
      return <h1>Error fetching</h1>;
  }
};
