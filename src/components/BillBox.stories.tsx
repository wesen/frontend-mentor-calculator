import * as React from 'react'
import { BillBox } from './BillBox'
import { ComponentStory } from '@storybook/react'

export default {
  component: BillBox,
  title: 'BillBox',
}

const Template: ComponentStory<typeof BillBox> = (args) => <BillBox {...args} />

export const Default = Template.bind({})
Default.args = {
  valueCents: 2300,
}
