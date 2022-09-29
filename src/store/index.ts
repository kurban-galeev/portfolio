import { combineReducers, configureStore } from '@reduxjs/toolkit'
import portfolioReducer from './reducers/slice'


const rootReducer = combineReducers({
  portfolioReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
