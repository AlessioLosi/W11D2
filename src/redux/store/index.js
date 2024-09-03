
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import jobsReducer from '../reducers/index'
import favouriteReducer from '../reducers/favourites'


const bigReducer = combineReducers({
  favourite:favouriteReducer,
  job: jobsReducer,
})

const store = configureStore({
  reducer: bigReducer, 
})
export default store
