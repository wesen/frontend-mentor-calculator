import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NumericalField } from './NumericalField'
import { DollarsLogo, UserLogo } from '../icons'
import { TipScreen } from './TipScreen'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default {
  component: TipScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'TipScreen',
} as ComponentMeta<typeof TipScreen>

const Template: ComponentStory<typeof TipScreen> = (args) => (
  <TipScreen {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Dollars = Template.bind({})
Dollars.args = {}

export const People = Template.bind({})
People.args = {}
