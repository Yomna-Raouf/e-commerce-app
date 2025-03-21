import type { ButtonHTMLAttributes } from 'react';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted'
} as const;

type ButtonType = keyof typeof BUTTON_TYPE_CLASSES;

type Props = {
  buttonType?: ButtonType;
  isLoading?: boolean;
  customClass?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType: ButtonType = BUTTON_TYPE_CLASSES.base): string =>
  ({
    [BUTTON_TYPE_CLASSES.base]:
      'rounded-4xl bg-[var(--purple_800)] hover:bg-[var(--purple_500)] text-[var(--neutral_100)] text-sm font-medium cursor-pointer flex justify-center items-center',
    [BUTTON_TYPE_CLASSES.inverted]: 'cursor-pointer text-[var(--purple_800)] text-xl'
  })[buttonType];

// TODO: create spinner component
const Button = ({ children, buttonType, customClass, isLoading = false, ...otherProps }: Props) => {
  const buttonTypeClasses = getButton(buttonType);
  return (
    <button disabled={isLoading} className={`${buttonTypeClasses} ${customClass} `} {...otherProps}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
