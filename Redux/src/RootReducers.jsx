import React from 'react'
import {combineReducers, createStore}  from 'redux'
import { counterReducer } from './Reducers'

    const RootReducers = combineReducers({
        counter : counterReducer,
    })
   

    const store = createStore(RootReducers)

export default store