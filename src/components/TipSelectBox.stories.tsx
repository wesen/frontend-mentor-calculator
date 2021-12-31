import * as React from 'react'
import { TipGrid } from './TipGrid'
import { ComponentStory } from '@storybook/react'
import { TipSelectBox } from './TipSelectBox'

export default {
  component: TipSelectBox,
  title: 'TipSelectBox',
}

const Template: ComponentStory<typeof TipSelectBox> = (args) => (
  <TipSelectBox {...args} />
)
export const Default = Template.bind({})
Default.args = {}
