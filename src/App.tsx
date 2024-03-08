import { FC } from 'react';
import { ItemsApiService } from './modules/switch-items/api/ItemsApiService';
import { SwitchItemsModule } from './modules/switch-items/components/SwitchItemsModule/SwitchItemsModule';

interface AppProps {
  service: ItemsApiService;
}

export const App: FC<AppProps> = ({ service }) => {
  return <SwitchItemsModule service={service} />;
};
