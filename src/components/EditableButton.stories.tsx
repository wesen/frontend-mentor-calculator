import * as React from 'react'
import { EditableButton } from './EditableButton'
import { ComponentStory } from '@storybook/react'

export default {
  component: EditableButton,
  title: 'EditableButton',
}

const Template: ComponentStory<typeof EditableButton> = (args) => (
  <EditableButton {...args} />
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
