import { combineReducers } from 'redux'
import sessionReducer from './sessionSlice'
import increaseDecreaseReducer from './increaseDecreaseSlice'

export default combineReducers({
    sessionReducer,
    increaseDecreaseReducer
})

