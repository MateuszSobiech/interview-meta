import { useCallback, useMemo, useState } from 'react';
import { PARENT_IDS, ParentIds } from '../consts/ParentIds';
import { Item } from '../types/Item';

export const useView = (initialItems: Item[]) => {
  const [items, setItems] = useState(initialItems);

  const { itemsA, itemsB } = useMemo(() => {
    return items.reduce<{ itemsA: Item[]; itemsB: Item[] }>(
      (acc, current) => {
        switch (current.parentId) {
          case PARENT_IDS.A:
            acc.itemsA.push(current);
            break;
          case PARENT_IDS.B:
            acc.itemsB.push(current);
            break;
        }

        return acc;
      },
      {
        itemsA: [],
        itemsB: [],
      }
    );
  }, [items]);

  const onChangeCheckbox = useCallback((itemId: number) => {
    setItems((elements) =>
      elements.map((element) => {
        if (element.id !== itemId) return element;

        return {
          ...element,
          checked: !element.checked,
        };
      })
    );
  }, []);

  const onClickButton = useCallback(
    (parentFrom: ParentIds, parentTo: ParentIds) => () => {
      setItems((elements) =>
        elements.map((element) => {
          if (element.parentId !== parentFrom || !element.checked) return element;

          return {
            ...element,
            checked: false,
            parentId: parentTo,
          };
        })
      );
    },
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickMoveParentAToB = useCallback(onClickButton(PARENT_IDS.A, PARENT_IDS.B), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickMoveParentBToA = useCallback(onClickButton(PARENT_IDS.B, PARENT_IDS.A), []);

  return {
    itemsA,
    itemsB,
    onChangeCheckbox,
    onClickMoveParentAToB,
    onClickMoveParentBToA,
  };
};
