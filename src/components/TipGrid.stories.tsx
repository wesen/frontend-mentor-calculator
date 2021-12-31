import * as React from 'react'
import { TipGrid } from './TipGrid'
import { ComponentStory } from '@storybook/react'

export default {
  component: TipGrid,
  title: 'TipGrid',
}

const Template: ComponentStory<typeof TipGrid> = (args) => <TipGrid {...args} />
export const Default = Template.bind({})
Default.args = {
  tipPercent: 5,
}

export const Selected = Template.bind({})
Selected.args = {
  tipPercent: 10,
}

export const Custom = Template.bind({})
Custom.args = {}
