import React from 'react'
import { Counter } from './Counter'
import { ComponentMeta, ComponentStory, Story, StoryFn } from '@storybook/react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { fireEvent, within } from '@storybook/testing-library'
import counterReducer from '../store/counterSlice'

const MockStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default {
  component: Counter,
  decorators: [(story) => <Provider store={MockStore}>{story()}</Provider>],
  title: 'Counter',
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => {
  return <Counter />
}
export const Default = Template.bind({})
Default.args = {
  count: 1,
}

export const WithInteractions = Template.bind({})
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  fireEvent.click(canvas.getByLabelText('Increment value'))
  fireEvent.click(canvas.getByLabelText('Increment value'))
}
