import { FC } from 'react';
import { ButtonWithIcon } from '../../../ui/ButtonWithIcon/ButtonWithIcon';
import { useView } from '../../hooks/useView';
import { Item } from '../../types/Item';
import { List } from '../List/List';
import styles from './View.module.css';

interface ViewProps {
  initialItems: Item[];
}

export const View: FC<ViewProps> = ({ initialItems }) => {
  const { itemsA, itemsB, onChangeCheckbox, onClickMoveParentAToB, onClickMoveParentBToA } =
    useView(initialItems);

  return (
    <div className={styles.container}>
      <List items={itemsA} onChange={onChangeCheckbox} />
      <div className={styles.buttons}>
        <ButtonWithIcon onClick={onClickMoveParentAToB}>{'>'}</ButtonWithIcon>
        <ButtonWithIcon onClick={onClickMoveParentBToA}>{'<'}</ButtonWithIcon>
      </div>
      <List items={itemsB} onChange={onChangeCheckbox} />
    </div>
  );
};
