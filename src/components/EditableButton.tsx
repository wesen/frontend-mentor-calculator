import * as React from 'react'
import { NumericalField } from './NumericalField'

type Props = {
  value?: string
  selected: boolean
  isError?: boolean
  onSubmit?: (val: string) => void
}

export const EditableButton: React.FunctionComponent<Props> = (props) => {
  const { value, selected, onSubmit, isError } = props

  return (
    <NumericalField
      value={value}
      onSubmit={onSubmit}
      transformDisplayValue={(v) => v + '%'}
      isError={isError}
      inputClassName={`${
        selected
          ? 'text-dark-green bg-light-green'
          : 'text-medium-green bg-lightest-green'
      } 
      ${value === undefined ? 'text-right' : 'text-center'}
        `}
      defaultValue="Custom"
      activeInputClassName="text-right text-medium-green bg-lightest-green"
    />
  )
}
