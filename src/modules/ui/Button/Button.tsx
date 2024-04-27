import { ComponentProps } from 'react';
import { PropsWithChildrenRequired } from '../../types/PropsWithChildrenRequired';

export const Button = ({
  children,
  ...rest
}: PropsWithChildrenRequired<ComponentProps<'button'>>) => {
  return <button {...rest}>{children}</button>;
};
