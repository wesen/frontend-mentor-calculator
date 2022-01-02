import * as React from 'react'
import { NumericalField } from './NumericalField'
import { DollarsLogo } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { BillState, setBillValue } from '../store/billSlice'

export const BillBox = () => {
  const { valueCents } = useSelector<RootState, BillState>((state) => {
    return state.bill
  })
  const dispatch = useDispatch()
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return (
    <div className="">
      <h2 className="text-gray text-md font-space font-bold mb-2">Bill</h2>
      <NumericalField
        unit={DollarsLogo}
        value={
          valueCents === undefined
            ? undefined
            : formatter.format(valueCents / 100.0)
        }
        inputClassName="text-right text-dark-green bg-lightest-green"
        onSubmit={(v: string) =>
          dispatch(setBillValue(Math.round(parseFloat(v) * 100)))
        }
      />
    </div>
  )
}
