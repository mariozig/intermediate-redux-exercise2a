import { createStore } from 'redux'
import deepfreeze from 'deep-freeze'

function printState() {
  console.log(store.getState())
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (
  state = { counter: 0, loggedIn: true, name: 'ryan' },
  action
) => {
  deepfreeze(state)
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(printState)

const increment_action = {
  type: INCREMENT
}

const decrement_action = {
  type: DECREMENT
}

store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(decrement_action)
store.dispatch(decrement_action)
