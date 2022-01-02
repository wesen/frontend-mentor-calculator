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
    <div
      className="bg-white rounded-t-3xl desktop:rounded-3xl p-8 flex
     flex-col gap-8 w-96
     desktop:flex-row desktop:w-3/4 desktop:mx-auto
    "
    >
      <div className="flex flex-col gap-8 desktop:w-1/2">
        <BillBox />
        <TipGrid />
        <PeopleBox />
      </div>
      <ResultBox className="desktop:w-1/2" />
    </div>
  )
}
