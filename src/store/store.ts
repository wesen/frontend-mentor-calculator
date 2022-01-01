import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { TipPercentageSlice } from './tipPercentageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tipPercentage: TipPercentageSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
