import { combineReducers, configureStore } from '@reduxjs/toolkit'
import planesReduce from './planes/planesSlice'
import planeReduce from './plane/planeSlice'


const roodReduser = combineReducers({
    planes: planesReduce,
    plane: planeReduce
    })

export function setupStore() {
    return configureStore({
        reducer: roodReduser
    })
}