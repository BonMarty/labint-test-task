import { HeadlineProps } from './types';

export const Headline = (props: HeadlineProps) => {
  const { variant, className, children, ...rest } = props;

  if (variant === 1) {
    return (
      <h1 className={`text-[52px] leading-[64px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h1>
    );
  }

  if (variant === 2) {
    return (
      <h2 className={`text-[40px] leading-[56px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h2>
    );
  }

  if (variant === 3) {
    return (
      <h3 className={`text-[32px] leading-[40px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h3>
    );
  }

  if (variant === 4) {
    return (
      <h4 className={`text-[24px] leading-[32px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h4>
    );
  }

  if (variant === 5) {
    return (
      <h5 className={`text-[20px] leading-[24px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h5>
    );
  }

  if (variant === 6) {
    return (
      <h6 className={`text-[16px] leading-[24px] font-semibold  ${className ? className : ''}`} {...rest}>
        {children}
      </h6>
    );
  }
};
