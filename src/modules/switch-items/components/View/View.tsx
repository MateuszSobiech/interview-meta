import { Button } from '../../../ui/Button/Button';
import { useView } from '../../hooks/useView';
import { Item } from '../../types/Item';
import { List } from '../List/List';
import { StyledButtons, StyledWrapper } from './View.styles';

interface ViewProps {
  initialItems: Item[];
}

export const View = ({ initialItems }: ViewProps) => {
  const { itemsA, itemsB, onChangeCheckbox, onClickMoveParentAToB, onClickMoveParentBToA } =
    useView(initialItems);

  return (
    <StyledWrapper>
      <List items={itemsA} onChange={onChangeCheckbox} />
      <StyledButtons>
        <Button onClick={onClickMoveParentAToB}>{'>'}</Button>
        <Button onClick={onClickMoveParentBToA}>{'<'}</Button>
      </StyledButtons>
      <List items={itemsB} onChange={onChangeCheckbox} />
    </StyledWrapper>
  );
};
