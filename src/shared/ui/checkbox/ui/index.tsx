import CheckMarkSvg from '../../../assets/check-mark.svg?react';
import { Body } from '../../body';
import { CheckboxProps } from './types';

export const Checkbox = (props: CheckboxProps) => {
  const { children, ...rest } = props;

  return (
    <label className="flex items-center gap-4">
      <div className="relative max-h-6 peer">
        <input className="appearance-none w-6 h-6 rounded border-2 border-midGray checked:bg-primary checked:border-primary" type="checkbox" {...rest} />
        <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <CheckMarkSvg className="fill-white" />
        </span>
      </div>
      <Body size={16} weight="regular">
        {children}
      </Body>
    </label>
  );
};
