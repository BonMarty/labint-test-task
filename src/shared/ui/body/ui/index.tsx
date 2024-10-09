import { getSize, getWeight } from '../utils';
import { BodyProps } from './types';

export const Body = (props: BodyProps) => {
  const { size, weight, className, children, ...rest } = props;

  return (
    <p className={`${getSize(size)} ${getWeight(weight)} ${className ? className : ''}`} {...rest}>
      {children}
    </p>
  );
};
