import { Item } from '../../types/Item';
import { StyledCheckbox, StyledLabel, StyledWrapper } from './SwitchItemsList.styles';

interface SwitchItemsListProps {
  items: Item[];
  onChange: (itemId: number) => void;
}

export const SwitchItemsList = ({ items, onChange }: SwitchItemsListProps) => {
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
