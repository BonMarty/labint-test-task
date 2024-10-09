import CancelSvg from '../../../assets/cancel.svg?react';
import CheckCircleSvg from '../../../assets/check-circle.svg?react';
import { Body } from '../../body';
import { getBorder } from '../utils';
import { TextInputProps } from './types';

export const TextInput = (props: TextInputProps) => {
  const { label, helperText, className, isSuccess, isError, ...rest } = props;

  return (
    <label className="relative block w-full">
      <span className={`${props.value ? '-translate-y-3' : 'translate-y-0'} absolute w-fit h-full top-0 flex justify-center items-center left-4 z-10 transition-all duration-300`}>
        <Body size={props.value ? 14 : 18} weight="regular" className={`${props.value ? 'text-gray' : 'text-darkGray'} transition-all duration-300`}>
          {label}
        </Body>
      </span>
      {isSuccess ? (
        <span className="absolute w-fit h-full flex justify-center items-center top-0 right-[22px] z-10">
          <CheckCircleSvg />
        </span>
      ) : null}
      {isError ? (
        <span className="absolute w-fit h-full flex justify-center items-center top-0 right-[22px] z-10">
          <CancelSvg />
        </span>
      ) : null}
      <input className={`${props.value ? 'px-4 pb-1 pt-6 bg-white' : 'p-4 bg-extralightGray'} ${getBorder(props.value, isError)} block w-full h-[64px] border-2 rounded transition-all duration-300`} {...rest} />
      {isError ? (
        <Body size={12} weight="regular" className="text-dangerous absolute top-full left-0 w-fit h-fit mt-[5px]">
          {helperText}
        </Body>
      ) : null}
    </label>
  );
};
