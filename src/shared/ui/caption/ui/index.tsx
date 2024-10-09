import { CaptionProps } from './types';

export const Caption = (props: CaptionProps) => {
  const { className, children, ...rest } = props;

  return (
    <span className={`text-[12px] leading-[24px] text-black uppercase ${className ? className : ''}`} {...rest}>
      {children}
    </span>
  );
};
