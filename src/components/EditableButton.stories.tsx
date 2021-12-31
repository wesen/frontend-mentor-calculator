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
  value: 'Custom',
}

export const Selected = Template.bind({})
Selected.args = {
  value: 'Custom',
}

export const Custom = Template.bind({})
Custom.args = {
  value: 'Custom',
}
