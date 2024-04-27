import { useSwitchItemsModule } from '../../hooks/useSwitchItemsModule';
import { SwitchItemsView } from '../SwitchItemsView/SwitchItemsView';

export const SwitchItemsModule = () => {
  const state = useSwitchItemsModule();

  switch (state.type) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'ok':
      return <SwitchItemsView initialItems={state.items} />;
    case 'error':
      return <h1>Error fetching</h1>;
  }
};
