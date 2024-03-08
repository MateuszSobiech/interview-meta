import { FC } from 'react';
import { Item } from '../../types/Item';
import { StyledCheckbox, StyledLabel, StyledWrapper } from './List.styles';

interface ListProps {
  items: Item[];
  onChange: (itemId: number) => void;
}

export const List: FC<ListProps> = ({ items, onChange }) => {
  return (
    <StyledWrapper>
      {items.map(({ id, checked, label }) => (
        <StyledLabel key={id}>
          <StyledCheckbox type='checkbox' checked={checked} onChange={() => onChange(id)} />
          <span>{label}</span>
        </StyledLabel>
      ))}
    </StyledWrapper>
  );
};
