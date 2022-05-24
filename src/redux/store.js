import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './ducks/index'

export const store = configureStore({
  reducer: rootReducer
})