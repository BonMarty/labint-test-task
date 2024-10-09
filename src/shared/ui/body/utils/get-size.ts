import { BodySize } from '../ui/types';

export const getSize = (size: BodySize) => {
  if (size === 12) {
    return 'text-[12px]';
  }

  if (size === 14) {
    return 'text-[14px]';
  }

  if (size === 16) {
    return 'text-[16px]';
  }

  if (size === 18) {
    return 'text-[18px]';
  }
};
