import * as React from 'react'
import { TipGrid } from './TipGrid'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default {
  component: TipGrid,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'TipGrid',
} as ComponentMeta<typeof TipGrid>

const Template: ComponentStory<typeof TipGrid> = (args) => <TipGrid {...args} />
export const Default = Template.bind({})
Default.args = {
  tipPercent: 5,
}

export const Selected = Template.bind({})
Selected.args = {
  tipPercent: 10,
  tipCustom: 23,
}

export const Custom = Template.bind({})
Custom.args = {
  tipCustom: 23,
  tipPercent: 23,
}
