import { FC } from 'react';
import { ItemsApiService } from '../../api/ItemsApiService';
import { useSwitchItemsModule } from '../../hooks/useSwitchItemsModule';
import { View } from '../View/View';

interface SwitchItemsModuleProps {
  service: ItemsApiService;
}

export const SwitchItemsModule: FC<SwitchItemsModuleProps> = ({ service }) => {
  const state = useSwitchItemsModule(service);

  switch (state.type) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'ok':
      return <View initialItems={state.items} />;
    case 'error':
      return <h1>Error fetching</h1>;
  }
};
