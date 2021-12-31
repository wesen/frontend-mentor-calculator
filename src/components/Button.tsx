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
      className={
        selected ? 'text-dark-green bg-light-green' : 'text-white bg-dark-green'
      }
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {title}
    </button>
  )
}
