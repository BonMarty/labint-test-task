import { ContainerProps } from './types';

export const Container = (props: ContainerProps) => {
  const { maxWidth, children, className, ...rest } = props;

  return (
    <div className={`${className ? className : ''} ${maxWidth ? maxWidth : 'max-w-[1216px]'} mx-auto`} {...rest}>
      {children}
    </div>
  );
};
