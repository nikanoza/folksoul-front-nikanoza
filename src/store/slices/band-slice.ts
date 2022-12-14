import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBandState } from 'types/store';

const initialState: { band: TBandState } = {
  band: {
    name: '',
    description: '',
    logo: '',
  },
};

const bandSlice = createSlice({
  name: 'band',
  initialState,
  reducers: {
    updateBand: (state, action: PayloadAction<TBandState>) => {
      state.band = action.payload;
    },
  },
});

export const bandActions = bandSlice.actions;
export const bandReducer = bandSlice.reducer;
