import * as React from 'react'

type Props = {
  title: string
  onClick: () => void
  selected: boolean
}

export const Button: React.FunctionComponent<Props> = (props) => {
  const { title, onClick, selected = false } = props
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {title}
    </button>
  )
}
