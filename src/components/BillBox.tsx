import * as React from 'react'
import { NumericalField } from './NumericalField'
import { DollarsLogo } from '../icons'

type Props = {
  valueCents: number
}

export const BillBox: React.FunctionComponent<Props> = (props) => {
  const { valueCents } = props
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return (
    <div className="w-72">
      <h2 className="text-gray text-md font-space font-bold mb-2">Bill</h2>
      <NumericalField
        unit={DollarsLogo}
        value={
          valueCents === undefined
            ? undefined
            : formatter.format(valueCents / 100.0)
        }
        className="text-right text-dark-green bg-lightest-green"
      />
    </div>
  )
}
