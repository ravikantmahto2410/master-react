import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>   {/*Jaise ki hum context  wale mein hum props pass karte the the waise hi hume yahan value naa bolke store bolte hai  aur{store } isliye likha hai kyonki iska naam hi store hai */}
    <App/>
  </Provider>
)
