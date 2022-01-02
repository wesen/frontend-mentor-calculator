import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TipPercentageSlice, TipPercentageState } from './tipPercentageSlice'
import { BillSlice, BillState } from './billSlice'
import { PeopleSlice, PeopleState } from './peopleSlice'
import { ResultSlice } from './resultSlice'

export const store = configureStore({
  reducer: {
    tipPercentage: TipPercentageSlice.reducer,
    bill: BillSlice.reducer,
    people: PeopleSlice.reducer,
    result: ResultSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
