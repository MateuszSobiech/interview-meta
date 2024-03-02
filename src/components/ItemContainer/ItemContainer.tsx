import { FC } from 'react';
import styles from './ItemContainer.module.css';
import { Item } from '../../types/Item';

interface ItemContainerProps {
  items: Item[];
  onChage: (itemId: number) => void;
}

export const ItemContainer: FC<ItemContainerProps> = ({ items, onChage }) => {
  return (
    <div className={styles.container}>
      {items.map(({ id, checked, label }) => (
        <label key={id}>
          <input
            className={styles.input}
            type='checkbox'
            checked={checked}
            onChange={() => onChage(id)}
          />{' '}
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};
