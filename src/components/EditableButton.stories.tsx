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
  title: '25%',
  selected: false,
}

export const Selected = Template.bind({})
Selected.args = {
  title: '15%',
  selected: true,
}

export const Custom = Template.bind({})
Custom.args = {
  title: 'Custom',
  selected: false,
  custom: true,
}
