import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reset } from './resultSlice'

export interface BillState {
  valueCents: number
  isError: boolean
  errorMessage: string
}
export const initialState: BillState = {
  valueCents: 0,
  isError: false,
  errorMessage: '',
}

export const BillSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setBillValue: (state: BillState, action: PayloadAction<number>) => {
      state.valueCents = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return initialState
    })
  },
})

export const { setBillValue } = BillSlice.actions
