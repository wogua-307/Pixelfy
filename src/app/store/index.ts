import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import featureReducer from './reducers/feature'
import collectReducer from './reducers/collect'

const pixelfyStore = configureStore({
  reducer: {
    feature: featureReducer,
    collect: collectReducer
  },
})

export type AppStore = typeof pixelfyStore
export type AppDispatch = typeof pixelfyStore.dispatch
export type AppGetState = typeof pixelfyStore.getState
export type RootState = ReturnType<typeof pixelfyStore.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default pixelfyStore