import { FC } from 'react';
import styles from './ItemList.module.css';
import { Item } from '../../types/Item';

interface ItemListProps {
  items: Item[];
  onChange: (itemId: number) => void;
}

export const ItemList: FC<ItemListProps> = ({ items, onChange }) => {
  return (
    <div className={styles.container}>
      {items.map(({ id, checked, label }) => (
        <label className={styles.label} key={id}>
          <input
            className={styles.input}
            type='checkbox'
            checked={checked}
            onChange={() => onChange(id)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};
