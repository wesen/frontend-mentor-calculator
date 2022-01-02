import * as React from 'react'
import { NumericalField } from './NumericalField'

type Props = {
  value?: string
  selected: boolean
  isError?: boolean
  onSubmit?: (val: string) => void
  label: string
}

export const EditableButton: React.FunctionComponent<Props> = (props) => {
  const { value, label, selected, onSubmit, isError } = props

  return (
    <NumericalField
      value={value}
      label={label}
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
