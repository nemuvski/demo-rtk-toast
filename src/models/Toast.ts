import { nanoid } from '@reduxjs/toolkit'

/**
 * Toastの内容
 */
export interface ToastContent {
  id: string
  level: ToastContentLevel
  content: string
  // 作成日時のタイムスタンプ
  createdAtTimestamp: number
}

/**
 * Toastのレベル識別子
 */
export type ToastContentLevel = 'success' | 'info' | 'warning' | 'error'

/**
 * ToastContentのオブジェクトを生成
 *
 * @param level
 * @param content
 * @returns ToastContent
 */
export const buildToastContent = (level: ToastContentLevel, content: string): ToastContent => ({
  // IDはランダム生成(8文字)
  id: nanoid(8),
  level,
  content,
  createdAtTimestamp: Date.now(),
})
