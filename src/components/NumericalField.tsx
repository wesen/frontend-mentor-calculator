import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

type Props = {
  value?: string
  defaultValue?: string
  isError?: boolean
  onSubmit?: (val: string) => void
  className?: string
  inputClassName?: string
  activeInputClassName?: string
  transformDisplayValue?: (v: string) => string
  unit?: any
  label: string
}

export const NumericalField: React.FunctionComponent<Props> = (props) => {
  const {
    value,
    className,
    onSubmit,
    isError,
    activeInputClassName,
    inputClassName,
    transformDisplayValue,
    defaultValue,
    unit,
    label,
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
    <div
      className={`relative flex
      ${className || ''}
    `}
    >
      {unit && (
        <div
          className="absolute left-2 text-lg 
      flex items-center justify-center
      w-6 h-6
      top-3 left-3
      "
        >
          {unit || ''}
        </div>
      )}
      <input
        ref={inputRef}
        type="text"
        aria-label={label}
        className={`
      rounded-md h-12 px-4 font-space font-bold text-lg w-full
      ${
        isError
          ? 'border-warning focus:border-light-green hover:border-light-warning'
          : 'border-lightest-green focus:border-light-green hover:border-light-green'
      }
       border-2 outline-0
      ${unit !== undefined ? 'text-right' : ''}
      ${inputClassName || ''}
      ${isEditing && activeInputClassName ? activeInputClassName : ''}
      `}
        value={displayValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}
