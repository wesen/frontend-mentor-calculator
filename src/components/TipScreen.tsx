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
import { TipGrid } from './TipGrid'
import { PeopleBox } from './PeopleBox'
import { BillBox } from './BillBox'
import { ResultBox } from './ResultBox'

type Props = {
  className?: string
}

export const TipScreen: React.FunctionComponent<Props> = (props) => {
  const { className } = props
  return (
    <div className="bg-white rounded-t-3xl p-8 flex flex-col gap-8 w-96">
      <BillBox />
      <TipGrid />
      <PeopleBox />
      <ResultBox />
    </div>
  )
}
