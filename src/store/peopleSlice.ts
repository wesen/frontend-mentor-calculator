import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reset } from './resultSlice'

export interface PeopleState {
  value: number
  isError: boolean
  errorMessage: string
}
export const initialState: PeopleState = {
  value: 1,
  isError: false,
  errorMessage: '',
}

export const PeopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeopleValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
      state.isError = false
    },
    setPeopleError: (state, action: PayloadAction<string>) => {
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

export const { setPeopleValue, setPeopleError } = PeopleSlice.actions
