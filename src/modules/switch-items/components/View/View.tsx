import { FC } from 'react';
import { ButtonWithIcon } from '../../../ui/ButtonWithIcon/ButtonWithIcon';
import { useView } from '../../hooks/useView';
import { Item } from '../../types/Item';
import { List } from '../List/List';
import { StyledButtons, StyledWrapper } from './View.styles';

interface ViewProps {
  initialItems: Item[];
}

export const View: FC<ViewProps> = ({ initialItems }) => {
  const { itemsA, itemsB, onChangeCheckbox, onClickMoveParentAToB, onClickMoveParentBToA } =
    useView(initialItems);

  return (
    <StyledWrapper>
      <List items={itemsA} onChange={onChangeCheckbox} />
      <StyledButtons>
        <ButtonWithIcon onClick={onClickMoveParentAToB}>{'>'}</ButtonWithIcon>
        <ButtonWithIcon onClick={onClickMoveParentBToA}>{'<'}</ButtonWithIcon>
      </StyledButtons>
      <List items={itemsB} onChange={onChangeCheckbox} />
    </StyledWrapper>
  );
};
