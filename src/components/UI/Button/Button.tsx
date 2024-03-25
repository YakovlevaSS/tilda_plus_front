import { ReactNode } from 'react';

import s from './Button.module.css';


interface IButtonProps {
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
}

const Button = ({
  children,
  classes,
  onClick,
  isDisabled = false,
  isActive = false,
}: IButtonProps) => (
  <button
    className={ `${classes && s[classes]} ${isDisabled && s.disabled} ${isActive && s.active}` }
    disabled={ isDisabled }
    type="button"
    onClick={ onClick }
  >
    { children }
  </button>
);

export default Button;
