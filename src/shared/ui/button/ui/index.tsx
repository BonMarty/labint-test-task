import { Headline } from '../../headline';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { variant, children, className, ...rest } = props;

  return (
    <button className={`${variant === 'primary' ? 'text-white bg-primary hover:bg-primaryHover disabled:bg-primaryDisabled' : 'text-black bg-lightGray hover:bg-white'} ${className ? className : ''} px-10 py-5 rounded transition-all duration-300`} {...rest}>
      <Headline variant={5}>{children}</Headline>
    </button>
  );
};
