import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

type Props = {
  value?: string
  selected: boolean
  onSubmit?: (val: string) => void
}

export const EditableButton: React.FunctionComponent<Props> = (props) => {
  const { value, onSubmit, selected } = props
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

  const editField = (
    <input
      ref={inputRef}
      type="text"
      className={`
      ${
        selected && !isEditing
          ? 'text-dark-green bg-light-green'
          : 'text-medium-green bg-lightest-green'
      } 
      ${isEditing ? 'text-right' : 'text-center'}
      rounded-md h-12 px-4 font-space font-bold text-lg
      border-lightest-green border-2
      outline-light-green outline-2`}
      value={isEditing ? editValue : value ? value + '%' : 'Custom'}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
  return editField
}
