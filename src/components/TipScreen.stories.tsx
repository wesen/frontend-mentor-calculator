import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NumericalField } from './NumericalField'
import { DollarsLogo, UserLogo } from '../icons'
import { TipScreen } from './TipScreen'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { reset } from '../store/resultSlice'
import { setBillValue } from '../store/billSlice'
import { setPeopleValue } from '../store/peopleSlice'
import { setCustomValue } from '../store/tipPercentageSlice'

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
Default.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
}

export const TwoPeople = Template.bind({})
TwoPeople.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
  store.dispatch(setPeopleValue(2))
}

export const TwoPeopleCustomTip = Template.bind({})
TwoPeopleCustomTip.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
  store.dispatch(setPeopleValue(2))
  store.dispatch(setCustomValue('23'))
}

export const Reset = Template.bind({})
Reset.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
  store.dispatch(setPeopleValue(2))
  store.dispatch(setCustomValue('23'))
  store.dispatch(reset({}))
}
