import {createStore} from 'redux'
import whiskeyReducer from './reducers/whiskey'

const store = createStore(whiskeyReducer)

export default store
