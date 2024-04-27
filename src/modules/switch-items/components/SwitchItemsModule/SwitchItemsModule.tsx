import { useSwitchItemsModule } from '../../hooks/useSwitchItemsModule';
import { View } from '../View/View';

export const SwitchItemsModule = () => {
  const state = useSwitchItemsModule();

  switch (state.type) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'ok':
      return <View initialItems={state.items} />;
    case 'error':
      return <h1>Error fetching</h1>;
  }
};
