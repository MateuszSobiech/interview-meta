import { useState } from 'react';
import './App.css';
import { Item, ItemContainer } from './components/ItemContainer/ItemContainer';
import { ButtonWithIcon } from './components/ui/ButtonWithIcon';

const PARENT_IDS = {
  A: 'A',
  B: 'B',
} as const

export type ParentIds = keyof typeof PARENT_IDS

const initialItems: Item[] = [
  { id: 1, label: '1', checked: false, parentId: PARENT_IDS.A },
  { id: 2, label: '2', checked: false, parentId: PARENT_IDS.A },
  { id: 3, label: '3', checked: false, parentId: PARENT_IDS.A },
  { id: 4, label: '4', checked: false, parentId: PARENT_IDS.A },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const itemsA = items.filter(item => item.parentId === PARENT_IDS.A)
  const itemsB = items.filter(item => item.parentId === PARENT_IDS.B)

  const onChangeCheckbox = (itemId: number) => {
    setItems(elements => elements.map(element => {
      if(element.id !== itemId) return element

      return {
        ...element,
        checked: !element.checked,
      }
    }))
  }

  const onClickButton = (parentFrom: ParentIds, parentTo: ParentIds) => () => {
    setItems(elements => elements.map(element => {
      if(element.parentId !== parentFrom || !element.checked) return element;

      return {
        ...element,
        checked: false,
        parentId: parentTo,
      }
    }))
  }
    
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 124,
      }}
    >
      <ItemContainer items={itemsA} onChage={onChangeCheckbox} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }}
      >
        <ButtonWithIcon onClick={onClickButton(PARENT_IDS.A, PARENT_IDS.B)}>{'>'}</ButtonWithIcon>
        <ButtonWithIcon onClick={onClickButton(PARENT_IDS.B, PARENT_IDS.A)}>{'<'}</ButtonWithIcon>
      </div>
      <ItemContainer items={itemsB} onChage={onChangeCheckbox} />
    </div>
  );
}

export default App;
