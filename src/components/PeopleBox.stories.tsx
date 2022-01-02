import * as React from 'react'
import { PeopleBox } from './PeopleBox'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { setPeopleError, setPeopleValue } from '../store/peopleSlice'
import { reset } from '../store/resultSlice'

export default {
  component: PeopleBox,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'PeopleBox',
} as ComponentMeta<typeof PeopleBox>

const Template: ComponentStory<typeof PeopleBox> = () => <PeopleBox />

export const Default = Template.bind({})
Default.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setPeopleValue(4))
}

export const ErrorZero = Template.bind({})
ErrorZero.play = () => {
  store.dispatch(reset({}))
  store.dispatch(setPeopleError("Can't be zero"))
}
