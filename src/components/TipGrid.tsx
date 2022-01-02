import * as React from 'react'
import { Button } from './Button'
import { EditableButton } from './EditableButton'
import { useState } from 'react'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCustomValue,
  setPresetValue,
  TipPercentageState,
} from '../store/tipPercentageSlice'

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

  return (
    <div>
      <h2 className="text-gray text-md font-space font-bold mb-2">
        Select Tip %
      </h2>
      <div className={`${className} grid grid-cols-2 w-72 mt-4 gap-4`}>
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
          value={isCustom ? value.toString() : undefined}
          onSubmit={(v: string) => dispatch(setCustomValue(v))}
        />
      </div>
    </div>
  )
}
