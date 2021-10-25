import React from 'react'
import { useToast } from '~/hooks/useToast'
import { ToastContentLevel } from '~/models/Toast'
import Toaster from '~/components/Toaster'

const App = () => {
  const { addToast } = useToast()

  return (
    <>
      <ul>
        {['success', 'info', 'warning', 'error'].map((level) => (
          <li key={level}>
            <button type='button' onClick={() => addToast(level as ToastContentLevel, 'Sample Text')}>
              {level}
            </button>
          </li>
        ))}
      </ul>

      <Toaster />
    </>
  )
}

export default App
