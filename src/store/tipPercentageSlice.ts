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
      state.isCustom = false
    },
    setCustomValue: (state, action: PayloadAction<string>) => {
      state.isCustom = true
      state.value = parseInt(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return initialState
    })
  },
})

export const { setPresetValue, setCustomValue } = TipPercentageSlice.actions
