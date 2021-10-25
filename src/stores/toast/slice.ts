import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToastContent } from '~/models/Toast'

export const toastAdapter = createEntityAdapter<ToastContent>({
  // 作成日時について降順とする
  sortComparer: (a, b) => b.createdAtTimestamp - a.createdAtTimestamp,
})

export const toastSlice = createSlice({
  name: 'toast',
  initialState: toastAdapter.getInitialState(),
  reducers: {
    addToast: (state, action: PayloadAction<ToastContent>) => {
      toastAdapter.addOne(state, action.payload)
    },
    removeToast: (state, action: PayloadAction<string>) => {
      toastAdapter.removeOne(state, action.payload)
    },
  },
})

export const { addToast, removeToast } = toastSlice.actions
