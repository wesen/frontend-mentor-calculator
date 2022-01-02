import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NumericalField } from './NumericalField'
import { DollarsLogo, UserLogo } from '../icons'
import { TipScreen } from './TipScreen'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { reset } from '../store/resultSlice'
import { setBillError, setBillValue } from '../store/billSlice'
import { setPeopleError, setPeopleValue } from '../store/peopleSlice'
import { setCustomValue, setTipError } from '../store/tipPercentageSlice'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
console.log('VIEWPORTS', INITIAL_VIEWPORTS)

export default {
  component: TipScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'TipScreen',
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'responsive',
    },
  },
} as ComponentMeta<typeof TipScreen>

const Template: ComponentStory<typeof TipScreen> = (args) => (
  <TipScreen {...args} />
)

export const Default = Template.bind({})
Default.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
}

export const DefaultMobile = Template.bind({})
DefaultMobile.play = Default.play
DefaultMobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const BillError = Template.bind({})
BillError.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillError("Can't be zero"))
}

export const PeopleError = Template.bind({})
PeopleError.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setPeopleError("Can't be zero"))
}

export const TipError = Template.bind({})
TipError.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setTipError("Can't be zero"))
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
  store.dispatch(setCustomValue(23))
}

export const Reset = Template.bind({})
Reset.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setBillValue(3500))
  store.dispatch(setPeopleValue(2))
  store.dispatch(setCustomValue(23))
  store.dispatch(reset({}))
}
