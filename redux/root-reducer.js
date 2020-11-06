import {combineReducers} from 'redux'
import reducer from './reducers'

const rootReducer = combineReducers({
    data: reducer
})

export default rootReducer