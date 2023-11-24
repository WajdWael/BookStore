import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { AuthProvider } from './contexts/AuthContext.tsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <AuthProvider>
        <App />
      </AuthProvider>
    {/* </BrowserRouter> */}
  </StrictMode>
)
