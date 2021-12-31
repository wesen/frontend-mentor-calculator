import * as React from 'react'

type Props = {
  value?: string
  onSubmit?: (val: string) => void
}

export const EditableButton: React.FunctionComponent<Props> = (props) => {
  const { value, onSubmit } = props
  return (
    <button
      className={`
      text-medium-green bg-lightest-green
        rounded-md h-12 px-4 font-space font-bold text-lg`}
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      {value ? value : 'Custom'}
    </button>
  )
}
