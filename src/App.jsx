import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import HomePage from './pages/Home'
import LoginPage from './pages/Auth/Login'
import SignupPage from './pages/Auth/SignUp'
import { GenericLayout } from './components/layout'
import ChatPage from './pages/Chat'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<GenericLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="px/login" element={<LoginPage />} />
          <Route path="doctor/login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
