import { FC } from 'react';
import { ParentIds } from '../../App';

export interface Item {
  id: number;
  label: string;
  checked: boolean;
  parentId: ParentIds;
}

interface ItemContainerProps {
  items: Item[];
  onChage: (itemId: number) => void;
}

export const ItemContainer: FC<ItemContainerProps> = ({ items, onChage }) => {
  return (
    <div
      style={{
        width: 250,
        height: 500,
        border: 'white 1px solid',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
      }}
    >
      {items.map(({ id, checked, label }) => (
        <label key={id}>
          <input
            style={{
              width: 18,
              height: 18,
            }}
            type='checkbox'
            onChange={() => onChage(id)}
            checked={checked}
          />{' '}
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};
