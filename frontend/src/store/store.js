import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store