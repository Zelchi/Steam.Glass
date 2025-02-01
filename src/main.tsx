import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import store from './store/store'
import App from './App.tsx'
import './main.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)