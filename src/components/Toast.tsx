import React from 'react'
import { useSelector } from 'react-redux'
import { selectToast } from '~/stores/toast/selector'
import { TOAST_DISPLAY_DURATION } from '~/constants'
import { useToast } from '~/hooks/useToast'
import { useTimeout } from '~/hooks/useTimeout'

type Props = {
  toastId: string
}

const Toast: React.FC<Props> = ({ toastId }) => {
  const toast = useSelector(selectToast(toastId))
  const { removeToast } = useToast()

  // 一定時間経過後に削除する
  useTimeout(() => removeToast(toastId), TOAST_DISPLAY_DURATION)

  if (!toast) {
    return null
  }

  return <div className={`toast ${toast.level}`}>{toast.content}</div>
}

export default Toast
