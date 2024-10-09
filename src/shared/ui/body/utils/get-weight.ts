import { BodyWeight } from '../ui/types';

export const getWeight = (weight: BodyWeight) => {
  if (weight === 'regular') {
    return 'font-normal';
  }

  if (weight === 'semibold') {
    return 'font-semibold';
  }
};
