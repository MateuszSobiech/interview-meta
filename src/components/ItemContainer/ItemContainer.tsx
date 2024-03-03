import { FC } from 'react';
import styles from './ItemContainer.module.css';
import { Item } from '../../types/Item';

interface ItemContainerProps {
  items: Item[];
  onChange: (itemId: number) => void;
}

export const ItemContainer: FC<ItemContainerProps> = ({ items, onChange }) => {
  return (
    <div className={styles.container}>
      {items.map(({ id, checked, label }) => (
        <label key={id}>
          <input
            className={styles.input}
            type='checkbox'
            checked={checked}
            onChange={() => onChange(id)}
          />{' '}
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};
