import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>

        <Route path='/*' element={<h1>Page not found</h1>} />'
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
