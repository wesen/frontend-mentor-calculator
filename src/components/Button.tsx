import * as React from 'react'

type Props = {
  title: string
  onClick?: () => void
  selected?: boolean
  custom?: boolean
  className?: string
}

export const Button: React.FunctionComponent<Props> = (props) => {
  const { title, onClick, custom = false, selected = false, className } = props
  return (
    <button
      className={`
      max-w-full
      ${
        selected
          ? 'text-dark-green bg-light-green hover:bg-lighter-green'
          : 'text-white bg-dark-green hover:bg-lighter-green hover:text-dark-green'
      }
      ${custom ? 'text-medium-green bg-lightest-green' : ''}
        rounded-md h-12 px-4 font-space font-bold text-lg
        ${className || ''} 
        `}
      onClick={(e) => {
        e.preventDefault()
        onClick && onClick()
      }}
    >
      {title}
    </button>
  )
}
