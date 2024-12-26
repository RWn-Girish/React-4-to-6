import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import { CartProvider } from './Context/CartContex'
import { Provider } from 'react-redux'
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CartProvider>
      <App />
    </CartProvider> */}

    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>
)
