import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider className='h-screen w-screen overflow-hidden'>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)
