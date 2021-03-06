import * as React from 'react'
import { Button } from './Button'
import { ComponentStory } from '@storybook/react'

export default {
  component: Button,
  title: 'Button',
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
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
