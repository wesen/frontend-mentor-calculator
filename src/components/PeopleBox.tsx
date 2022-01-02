import * as React from 'react'
import { NumericalField } from './NumericalField'
import { UserLogo } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { PeopleState, setPeopleValue } from '../store/peopleSlice'

export const PeopleBox = () => {
  const { value } = useSelector<RootState, PeopleState>((state) => {
    return state.people
  })
  const dispatch = useDispatch()

  return (
    <div className="w-72">
      <h2 className="text-gray text-md font-space font-bold mb-2">
        Number of People
      </h2>
      <NumericalField
        unit={UserLogo}
        value={value === undefined ? undefined : value.toString()}
        inputClassName="text-right text-dark-green bg-lightest-green"
        onSubmit={(value) => dispatch(setPeopleValue(parseInt(value)))}
      />
    </div>
  )
}
