import { LOAD_EVENT, ADD_EVENT, EDIT_EVENT, REMOVE_EVENT } from "../actions"
import { set } from '../storage'

const initialState = {
    data: []
}

export default function(state=initialState.data, action){
    switch(action.type){
        case LOAD_EVENT:
            return action.payload
        case ADD_EVENT:
            return [action.payload, ...state]
        case EDIT_EVENT:
            let data_event = state.map(evt => evt.event_id === action.payload.event_id ? (evt = action.payload) : evt)
            // save to storage
            set(data_event)
            return data_event
        case REMOVE_EVENT:
            let data_event_remove = state.filter(evt => evt.event_id !== action.payload)
            // save to storage
            set(data_event_remove)
            return data_event_remove
        default:
            return state
    }
}