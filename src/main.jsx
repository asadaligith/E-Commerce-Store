import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './view/signup/Signup.jsx'
import Dashboard from './view/dashboard/Dashboard.jsx'
import Login from './view/login/Login.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
     <BrowserRouter basename="/E-Commerce-Store">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signup" element={<Signup />} />      
      <Route path="/Login" element={<Login />} />      
    
    </Routes>
  </BrowserRouter>
  </AuthContextProvider>
  </StrictMode>
)
