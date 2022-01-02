import * as React from 'react'
import { Button } from './Button'
import { reset } from '../store/resultSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const ResultBox = () => {
  const { tipAmountCents, totalCents } = useSelector(
    ({ bill, people, tipPercentage }: RootState) => {
      const totalCents = Math.round(
        (bill.valueCents * (100 + tipPercentage.value)) / 100.0 / people.value,
      )
      const tipAmountCents = Math.round(
        ((tipPercentage.value / 100.0) * bill.valueCents) / people.value,
      )
      return {
        totalCents,
        tipAmountCents,
      }
    },
  )
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  const dispatch = useDispatch()

  return (
    <div className="w-80 bg-dark-green rounded-2xl flex flex-col gap-4 p-5">
      <div className="flex flex-row justify-between mt-4 ">
        <h2 className="text-white text-md font-space font-bold mb-2 flex flex-col">
          <span>Tip Amount</span>{' '}
          <span className="text-light-gray text-sm">/ person</span>
        </h2>
        <div className="text-xl text-light-green font-space font-bold">
          ${formatter.format(tipAmountCents / 100)}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h2 className="text-white text-md font-space font-bold mb-2 flex flex-col flex-shrink">
          <span>Total</span>{' '}
          <span className="text-light-gray text-sm">/ person</span>
        </h2>
        <div className="text-xl text-light-green font-space">
          ${formatter.format(totalCents / 100)}
        </div>
      </div>
      <Button
        selected={true}
        onClick={() => {
          dispatch(reset({}))
        }}
        className="text-md2"
        title="RESET"
      />
    </div>
  )
}
