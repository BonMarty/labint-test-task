import { FormState } from '../model';

export const getDisabled = (state: FormState) => {
  if (!state.name || !state.phone || !state.checked) {
    return true;
  }

  return false;
};
