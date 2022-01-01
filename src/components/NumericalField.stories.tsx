import * as React from 'react'
import { EditableButton } from './EditableButton'
import { ComponentStory } from '@storybook/react'
import { NumericalField } from './NumericalField'

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

export const Selected = Template.bind({})
Selected.args = {
  value: '23',
  selected: true,
}

export const Custom = Template.bind({})
Custom.args = {
  value: undefined,
  selected: false,
}
