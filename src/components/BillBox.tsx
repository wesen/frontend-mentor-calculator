import * as React from 'react'
import { NumericalField } from './NumericalField'
import { DollarsLogo } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { BillState, setBillError, setBillValue } from '../store/billSlice'
import { setPeopleError, setPeopleValue } from '../store/peopleSlice'

export const BillBox = () => {
  const { valueCents, isError, errorMessage } = useSelector<
    RootState,
    BillState
  >((state) => {
    return state.bill
  })
  const dispatch = useDispatch()
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })

  const handleSubmit = (value: string) => {
    if (!isNaN(Number(value))) {
      const number = parseInt(value)
      if (number > 0) {
        dispatch(setBillValue(Math.round(parseFloat(value) * 100)))
      } else if (number == 0) {
        dispatch(setBillError("Can't be zero"))
      } else if (number < 0) {
        dispatch(setBillError('Not negative'))
      }
    } else {
      dispatch(setBillError('Not a number'))
    }
  }
  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h2 className="text-gray text-md font-space font-bold mb-2">Bill</h2>
        {isError ? (
          <p className="text-warning font-space font-bold">{errorMessage}</p>
        ) : (
          <></>
        )}
      </div>
      <NumericalField
        unit={DollarsLogo}
        value={
          valueCents === undefined
            ? undefined
            : formatter.format(valueCents / 100.0)
        }
        isError={isError}
        inputClassName="text-right text-dark-green bg-lightest-green"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
