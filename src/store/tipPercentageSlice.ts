import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reset } from './resultSlice'

export interface TipPercentageState {
  value: number
  isCustom: boolean
  isError: boolean
  errorMessage: string
}
export const initialState: TipPercentageState = {
  value: 5,
  isCustom: false,
  isError: false,
  errorMessage: '',
}

export const TipPercentageSlice = createSlice({
  name: 'tipPercentage',
  initialState,
  reducers: {
    setPresetValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
      state.isError = false
      state.isCustom = false
    },
    setCustomValue: (state, action: PayloadAction<number>) => {
      state.isCustom = true
      state.isError = false
      state.value = action.payload
    },
    setTipError: (state, action: PayloadAction<string>) => {
      state.isError = true
      state.errorMessage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return initialState
    })
  },
})

export const { setPresetValue, setCustomValue, setTipError } =
  TipPercentageSlice.actions
