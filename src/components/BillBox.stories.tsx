import * as React from 'react'
import { BillBox } from './BillBox'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default {
  component: BillBox,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'BillBox',
} as ComponentMeta<typeof BillBox>

const Template: ComponentStory<typeof BillBox> = () => <BillBox />

export const Default = Template.bind({})
Default.args = {
  valueCents: 2300,
}
