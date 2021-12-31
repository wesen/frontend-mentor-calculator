import * as React from 'react'
import { Button } from './Button'

type Props = {
  onSelectTip?: (arg0: number) => void
  tipPercent?: number
  tipCustom?: number
  className?: string
}

export const TipGrid: React.FunctionComponent<Props> = (props) => {
  const { onSelectTip, tipCustom, tipPercent, className } = props
  return (
    <div className={`${className} grid grid-cols-2 w-72 gap-4`}>
      {[5, 10, 15, 25, 50].map((v) => {
        return (
          <Button
            key={v}
            title={`${v}%`}
            selected={!tipCustom && tipPercent == v}
            onClick={() => {
              onSelectTip && onSelectTip(v)
            }}
          />
        )
      })}
      <Button title="Custom" custom={true} />
    </div>
  )
}
