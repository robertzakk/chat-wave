import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import RootPage from './pages/RootPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/email-verification' element={<EmailVerificationPage />} />
          <Route element={<RootPage />}>
            <Route path='/' element={<ProfilePage />} />
            <Route path='search' element={<h1>Search Page</h1>} />
            <Route path='conversation' element={<h1>Conversation Page</h1>} />
          </Route>
          

          <Route path='/*' element={<h1>Page not found</h1>} />'
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
