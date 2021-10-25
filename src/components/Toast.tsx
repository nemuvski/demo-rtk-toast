import React, { useState } from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { selectToast } from '~/stores/toast/selector'
import { TOAST_ANIMATION_DURATION, TOAST_DISPLAY_DURATION } from '~/constants'
import { useToast } from '~/hooks/useToast'
import { useTimeout } from '~/hooks/useTimeout'

type Props = {
  toastId: string
}

const Toast: React.FC<Props> = ({ toastId }) => {
  const toast = useSelector(selectToast(toastId))
  const [isHidden, setIsHidden] = useState(false)
  const { removeToast } = useToast()

  // 一定時間経過後に削除する
  useTimeout(() => setIsHidden(true), TOAST_DISPLAY_DURATION - TOAST_ANIMATION_DURATION)
  useTimeout(() => removeToast(toastId), TOAST_DISPLAY_DURATION)

  if (!toast) {
    return null
  }

  return <div className={clsx('toast', toast.level, { 'is-hidden': isHidden })}>{toast.content}</div>
}

export default Toast
