import * as React from 'react'
import { Button } from './Button'
import { EditableButton } from './EditableButton'
import { useState } from 'react'

type Props = {
  onSelectTip?: (arg0: number) => void
  tipPercent?: number
  tipCustom?: number
  className?: string
}

export const TipGrid: React.FunctionComponent<Props> = (props) => {
  const { onSelectTip, tipCustom, tipPercent, className } = props
  const [isCustom, setIsCustom] = useState(tipCustom == tipPercent)
  const [customValue, setCustomValue] = useState(tipCustom)
  const [selectedTip, setSelectedTip] = useState(tipPercent)

  const handleOnCustomSubmit = (v: string) => {
    if (v) {
      setCustomValue(parseInt(v))
      setIsCustom(true)
    } else {
      setCustomValue(undefined)
      setIsCustom(false)
    }
  }
  return (
    <div className={`${className} grid grid-cols-2 w-72 gap-4`}>
      {[5, 10, 15, 25, 50].map((v) => {
        return (
          <Button
            key={v}
            title={`${v}%`}
            selected={!isCustom && selectedTip == v}
            onClick={() => {
              setIsCustom(false)
              setSelectedTip(v)
              setIsCustom(false)
              setCustomValue(undefined)
              onSelectTip && onSelectTip(v)
            }}
          />
        )
      })}
      <EditableButton
        selected={isCustom}
        value={customValue !== undefined ? customValue.toString() : undefined}
        onSubmit={handleOnCustomSubmit}
      />
    </div>
  )
}
