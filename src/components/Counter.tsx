import React from 'react'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <button
          className="bg-amber-300 px-2 py-1 rounded-md hover:bg-amber-500"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-amber-300 px-2 py-1 rounded-md hover:bg-amber-500"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
