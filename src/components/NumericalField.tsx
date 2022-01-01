import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

type Props = {
  value?: string
  defaultValue?: string
  onSubmit?: (val: string) => void
  className?: string
  activeClassName?: string
  transformDisplayValue?: (v: string) => string
}

export const NumericalField: React.FunctionComponent<Props> = (props) => {
  const {
    value,
    onSubmit,
    activeClassName,
    className,
    transformDisplayValue,
    defaultValue,
  } = props
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState<string | undefined>(value)
  const [previousValue, setPreviousValue] = useState<string | undefined>(value)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }
  const clear = () => {
    setEditValue(previousValue)
    inputRef.current && inputRef.current.blur()
  }
  const submit = () => {
    const value = editValue ?? ''
    inputRef.current && inputRef.current.blur()
    setEditValue(value)
    onSubmit && onSubmit(value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit()
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  const handleFocus = () => {
    setPreviousValue(editValue)
    setEditValue('')
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
    clear()
  }

  const displayValue = ((v?: string) => {
    if (isEditing) {
      return editValue
    }
    const value_ = v || defaultValue || ''
    return transformDisplayValue && v !== undefined
      ? transformDisplayValue(value_)
      : value_
  })(value)

  return (
    <input
      ref={inputRef}
      type="text"
      className={`
      rounded-md h-12 px-4 font-space font-bold text-lg
      border-lightest-green border-2
      outline-light-green outline-2
      ${className || ''}
      ${isEditing && activeClassName ? activeClassName : ''}
      `}
      value={displayValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}
