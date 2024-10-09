import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MenuState } from './types';

const initialState: MenuState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsOpen(state: MenuState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = menuSlice.actions;
