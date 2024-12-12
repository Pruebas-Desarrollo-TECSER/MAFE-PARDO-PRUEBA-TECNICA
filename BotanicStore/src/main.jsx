import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles/utils/global.css'
import App from './App.jsx'
import {NextUIProvider} from '@nextui-org/react'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
)
