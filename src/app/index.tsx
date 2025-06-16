import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/App'
import { Provider } from 'react-redux'
import pixelfyStore from './store'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('figma-plugin-pixelfy')
  const root = createRoot(container)
  window.Pixel_Store = pixelfyStore
  root.render(
  <Provider store={pixelfyStore}>
    <App />
  </Provider>
  )
})