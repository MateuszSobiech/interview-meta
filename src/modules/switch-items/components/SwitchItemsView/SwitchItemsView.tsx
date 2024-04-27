import { Button } from '../../../ui/Button/Button';
import { useSwitchItemsView } from '../../hooks/useSwitchItemsView';
import { Item } from '../../types/Item';
import { SwitchItemsList } from '../SwitchItemsList/SwitchItemsList';
import { StyledButtons, StyledWrapper } from './SwitchItemsView.styles';

interface SwitchItemsViewProps {
  initialItems: Item[];
}

export const SwitchItemsView = ({ initialItems }: SwitchItemsViewProps) => {
  const { itemsA, itemsB, onChangeCheckbox, onClickMoveParentAToB, onClickMoveParentBToA } =
    useSwitchItemsView(initialItems);

  return (
    <StyledWrapper>
      <SwitchItemsList items={itemsA} onChange={onChangeCheckbox} />
      <StyledButtons>
        <Button onClick={onClickMoveParentAToB}>{'>'}</Button>
        <Button onClick={onClickMoveParentBToA}>{'<'}</Button>
      </StyledButtons>
      <SwitchItemsList items={itemsB} onChange={onChangeCheckbox} />
    </StyledWrapper>
  );
};
