import { combineReducers } from 'redux'
import eventReducers from './eventReducers'
export default combineReducers({
    events: eventReducers
})