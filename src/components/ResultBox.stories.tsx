import * as React from 'react'
import { ResultBox } from './ResultBox'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default {
  component: ResultBox,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'ResultBox',
} as ComponentMeta<typeof ResultBox>

const Template: ComponentStory<typeof ResultBox> = () => <ResultBox />

export const Default = Template.bind({})
Default.args = {
  tipCents: 500,
  totalCents: 3250,
}
