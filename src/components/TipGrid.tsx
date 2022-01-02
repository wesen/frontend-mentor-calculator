import * as React from 'react'
import { Button } from './Button'
import { EditableButton } from './EditableButton'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCustomValue,
  setPresetValue,
  setTipError,
  TipPercentageState,
} from '../store/tipPercentageSlice'
import { setPeopleError, setPeopleValue } from '../store/peopleSlice'

type Props = {
  className?: string
}

export const TipGrid: React.FunctionComponent<Props> = (props) => {
  const { className } = props

  const { value, isCustom, isError, errorMessage } = useSelector<
    RootState,
    TipPercentageState
  >((state) => state.tipPercentage)
  const dispatch = useDispatch()

  const handleSubmit = (value: string) => {
    if (!isNaN(Number(value))) {
      const number = parseInt(value)
      if (number > 0) {
        dispatch(setCustomValue(number))
      } else if (number < 0) {
        dispatch(setTipError('Not negative'))
      }
    } else {
      dispatch(setTipError('Not a number'))
    }
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h2 className="text-gray text-md font-space font-bold mb-2">
          Select Tip %
        </h2>
        {isError ? (
          <p className="text-warning font-space font-bold">{errorMessage}</p>
        ) : (
          <></>
        )}
      </div>
      <div className={`${className} grid grid-cols-2 mt-4 gap-4`}>
        {[5, 10, 15, 25, 50].map((v) => {
          return (
            <Button
              key={v}
              title={`${v}%`}
              selected={!isCustom && value == v}
              onClick={() => {
                dispatch(setPresetValue(v))
              }}
            />
          )
        })}
        <EditableButton
          selected={isCustom}
          isError={isError}
          value={isCustom ? value.toString() : undefined}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
