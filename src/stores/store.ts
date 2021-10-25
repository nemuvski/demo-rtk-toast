import { configureStore } from '@reduxjs/toolkit'
import { toastSlice } from '~/stores/toast/slice'

export const store = configureStore({
  reducer: {
    [toastSlice.name]: toastSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
