import { useCallback, useState } from 'react';
import { PARENT_IDS } from '../consts/ParentIds';
import { Item } from '../types/Item';
import { ParentIds } from '../types/ParentIds';

export const useView = (initialItems: Item[]) => {
  const [items, setItems] = useState(initialItems);

  // if component will has more state we will
  // use useMemo() for itemsA and itemsB
  const itemsA = items.filter((item) => item.parentId === PARENT_IDS.A);
  const itemsB = items.filter((item) => item.parentId === PARENT_IDS.B);

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

  // onClickButton is doubled so we used higher-order function
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
