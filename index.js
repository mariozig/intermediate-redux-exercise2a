import { createStore } from 'redux'

function printState() {
  console.log(store.getState())
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(printState)

const increment_action = {
  type: 'INCREMENT'
}

const decrement_action = {
  type: 'DECREMENT'
}

store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(increment_action)
store.dispatch(decrement_action)
store.dispatch(decrement_action)
