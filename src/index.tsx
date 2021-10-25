import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '~/stores/store'
import App from '~/components/App'

import '~/styles/animation.css'
import '~/styles/global.css'
import '~/styles/toaster.css'
import '~/styles/toast.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)
