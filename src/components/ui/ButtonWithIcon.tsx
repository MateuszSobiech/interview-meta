import { FC, ReactNode } from 'react';

interface ButtonWithIconProps {
  children: ReactNode;
  onClick: () => void;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
