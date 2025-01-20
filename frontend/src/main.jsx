import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './Layouts/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
    
  </StrictMode>,
)
