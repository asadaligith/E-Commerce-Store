import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './view/signup/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/E-Commerce-Store" element={<App />} />
      <Route path="/E-Commerce-Store/Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
