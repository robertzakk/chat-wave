import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router';
import LoginPage from './pages/LoginPage';
import EmailVerification from './pages/EmailVerificationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/email-verification' element={<EmailVerification />}/>

          <Route path='/*' element={<h1>Page not found</h1>} />'
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
