const INITIAL_STATE = {
  counter: 0
}

//Reducer
export function counterApp(state = INITIAL_STATE, action) {
  console.log('reducer ', state, action)
  switch(action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}