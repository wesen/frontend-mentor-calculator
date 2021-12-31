import * as React from 'react'
import { Button } from './Button'
import { TipGrid } from './TipGrid'

type Props = {}

export const TipSelectBox: React.FunctionComponent<Props> = (props) => {
  const {} = props
  return (
    <div>
      <h2 className="text-gray text-md font-space font-bold">Select Tip %</h2>
      <TipGrid className="mt-4" />
    </div>
  )
}
