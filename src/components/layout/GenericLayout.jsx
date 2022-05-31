import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

function GenericLayout() {
  return (
    <div>
      <Navbar />
      <section className='container mx-auto'>
      <Outlet />
      </section>
    </div>
  )
}

export default GenericLayout