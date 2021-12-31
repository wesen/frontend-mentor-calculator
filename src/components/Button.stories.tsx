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
  title: 'Default',
  selected: false,
}

export const Selected = Template.bind({})
Selected.args = {
  title: 'Selected',
  selected: true,
}
