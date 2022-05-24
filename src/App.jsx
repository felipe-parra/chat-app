import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import HomePage from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
