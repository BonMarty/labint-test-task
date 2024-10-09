import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState } from './types';

const initialState: FormState = {
  name: '',
  phone: '',
  checked: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state: FormState, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    setPhone(state: FormState, action: PayloadAction<string>) {
      state.phone = action.payload;
    },

    setChecked(state: FormState, action: PayloadAction<boolean>) {
      state.checked = action.payload;
    },
  },
});

export const { setName, setPhone, setChecked } = formSlice.actions;
