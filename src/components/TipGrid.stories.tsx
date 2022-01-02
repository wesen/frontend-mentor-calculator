import * as React from 'react'
import { TipGrid } from './TipGrid'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { setCustomValue, setPresetValue } from '../store/tipPercentageSlice'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  component: TipGrid,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'TipGrid',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
} as ComponentMeta<typeof TipGrid>

const Template: ComponentStory<typeof TipGrid> = (args) => <TipGrid {...args} />
export const Default = Template.bind({})
Default.play = () => {
  store.dispatch(setPresetValue(5))
}
Default.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
}
export const DefaultMobile = Template.bind({})
DefaultMobile.play = Default.play
DefaultMobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const Selected = Template.bind({})
Selected.play = () => {
  store.dispatch(setPresetValue(10))
}

export const Custom = Template.bind({})
Custom.play = () => {
  store.dispatch(setCustomValue(23))
}
