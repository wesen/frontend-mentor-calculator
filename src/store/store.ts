import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TipPercentageSlice, TipPercentageState } from './tipPercentageSlice'
import { BillSlice, BillState } from './billSlice'
import { PeopleSlice, PeopleState } from './peopleSlice'
import { ResultSlice, ResultState } from './resultSlice'

const rootReducer = combineReducers({
  tipPercentage: TipPercentageSlice.reducer,
  bill: BillSlice.reducer,
  people: PeopleSlice.reducer,
  result: ResultSlice.reducer,
})

export const store = configureStore({
  reducer: (state, action) => {
    console.log('rootReducer', state, action)
    const res = rootReducer(state, action)
    console.log('rootReducer.res', res, action)

    const {
      bill,
      people,
      tipPercentage,
      result,
    }: {
      bill: BillState
      people: PeopleState
      tipPercentage: TipPercentageState
      result: ResultState
    } = res

    if (bill.valueCents >= 0 && people.value > 0 && tipPercentage.value >= 0) {
      const totalCents = Math.round(
        (bill.valueCents * (100 + tipPercentage.value)) / 100.0 / people.value,
      )
      const tipAmountCents = Math.round(
        ((tipPercentage.value / 100.0) * bill.valueCents) / people.value,
      )
      return {
        ...res,
        result: {
          ...result,
          totalCents,
          tipAmountCents,
        },
      }
    } else {
      return res
    }
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
