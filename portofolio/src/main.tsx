import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer.tsx'
import PreLoader from './components/PreLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreLoader />
    <div className='container mx-auto px-4'>
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
