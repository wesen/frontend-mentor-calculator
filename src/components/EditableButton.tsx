import * as React from 'react'
import { NumericalField } from './NumericalField'

type Props = {
  value?: string
  selected: boolean
  onSubmit?: (val: string) => void
}

export const EditableButton: React.FunctionComponent<Props> = (props) => {
  const { value, selected, onSubmit } = props

  return (
    <NumericalField
      value={value}
      onSubmit={onSubmit}
      transformDisplayValue={(v) => v + '%'}
      className={`${
        selected
          ? 'text-dark-green bg-light-green'
          : 'text-medium-green bg-lightest-green'
      } 
      ${value === undefined ? 'text-right' : 'text-center'}
        `}
      defaultValue="Custom"
      activeClassName="text-right text-medium-green bg-lightest-green"
    />
  )
}
