import {connect} from 'react-redux'
import {Counter} from '../components/Counter'

const mapStateToProps = state => {
  return { counter: state.counter }
}

const mapDispacthToProp = dispacth => {
  return {
    increment: () => dispacth({ type: 'INCREMENT' }),
    decrement: () => dispacth({ type: 'DECREMENT' })
  }
}

const createConnection = connect(
  mapStateToProps,
  mapDispacthToProp
)

const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux