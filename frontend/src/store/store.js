import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer';
import friendsReducer from './reducers/friendsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store