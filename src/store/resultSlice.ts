import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ResultState {
  tipAmountCents: number
  totalCents: number
}
export const initialState: ResultState = {
  tipAmountCents: 0,
  totalCents: 0,
}

export const ResultSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    reset: (state, action) => {},
  },
})

export const { reset } = ResultSlice.actions
