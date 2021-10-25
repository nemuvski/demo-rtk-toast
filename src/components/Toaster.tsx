import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllToasts } from '~/stores/toast/selector'
import Toast from '~/components/Toast'

const Toaster = () => {
  const toasts = useSelector(selectAllToasts)

  if (!toasts.length) {
    return null
  }

  return (
    <div>
      {toasts.map(({ id }) => (
        <Toast key={id} toastId={id} />
      ))}
    </div>
  )
}

export default Toaster
