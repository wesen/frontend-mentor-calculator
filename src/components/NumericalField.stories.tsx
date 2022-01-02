import * as React from 'react'
import { ComponentStory } from '@storybook/react'
import { NumericalField } from './NumericalField'
import { DollarsLogo, UserLogo } from '../icons'

export default {
  component: NumericalField,
  title: 'NumericalField',
}

const Template: ComponentStory<typeof NumericalField> = (args) => (
  <NumericalField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  value: '23',
}

export const Dollars = Template.bind({})
Dollars.args = {
  value: '23.00',
  unit: DollarsLogo,
}

export const People = Template.bind({})
People.args = {
  value: '5',
  unit: UserLogo,
}
