import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const ResultSlice = createSlice({
  name: 'root',
  initialState: {},
  reducers: {
    reset: (state, action) => {},
  },
})

export const { reset } = ResultSlice.actions
