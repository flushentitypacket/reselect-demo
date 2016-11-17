import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp, applyMiddleware(createLogger()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("mount")
)
