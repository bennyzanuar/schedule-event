import { set, get, initalData } from '../storage'

export const ADD_EVENT = "ADD_EVENT"
export const EDIT_EVENT = "EDIT_EVENT"
export const LOAD_EVENT = "LOAD_EVENT"
export const REMOVE_EVENT = "REMOVE_EVENT"

export const loadEvent = () => dispatch => {
    if (get() == null) {
        initalData()
    }
    let data = get()
    dispatch({
        type: LOAD_EVENT,
        payload: data
    })
}

export const addEvent = (data) => dispatch => {
    let dataStorage = get()
    dataStorage.push(data)
    set(dataStorage)
    
    dispatch({
        type: ADD_EVENT,
        payload: data
    })
}

export const editEvent = (data) => dispatch => {
    dispatch({
        type: EDIT_EVENT,
        payload: data
    })
}

export const removeEvent = (id) => dispatch => {
    dispatch({
        type: REMOVE_EVENT,
        payload: id
    })
}