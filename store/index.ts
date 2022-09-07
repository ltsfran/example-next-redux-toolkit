/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import modal from './modal.slice'
import users from './users.slice'

const combinedReducer = combineReducers({
  modal,
  users
})

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () => {
  return configureStore({
    reducer
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof combinedReducer>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
AppState,
unknown,
Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
