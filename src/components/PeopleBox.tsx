import * as React from 'react'
import { NumericalField } from './NumericalField'
import { UserLogo } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import {
  PeopleState,
  setPeopleError,
  setPeopleValue,
} from '../store/peopleSlice'

export const PeopleBox = () => {
  const { value, isError, errorMessage } = useSelector<RootState, PeopleState>(
    (state) => {
      return state.people
    },
  )
  const dispatch = useDispatch()

  const handleSubmit = (value: string) => {
    if (!isNaN(Number(value))) {
      const number = parseInt(value)
      if (number > 0) {
        dispatch(setPeopleValue(number))
      } else if (number == 0) {
        dispatch(setPeopleError("Can't be zero"))
      } else if (number < 0) {
        dispatch(setPeopleError('Not negative'))
      }
    } else {
      dispatch(setPeopleError('Not a number'))
    }
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h2 className="text-gray text-md font-space font-bold mb-2">
          Number of People
        </h2>
        {isError ? (
          <p className="text-warning font-space font-bold">{errorMessage}</p>
        ) : (
          <></>
        )}
      </div>

      <NumericalField
        label="People"
        unit={UserLogo}
        isError={isError}
        value={value === undefined ? undefined : value.toString()}
        inputClassName={`text-dark-green bg-lightest-green`}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
