import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  
  return (
    <div className='container-fluid d-flex'>
      <section className='mx-auto m-2 d-flex flex-column'>
        <h3>
          404 - Lo sentimos, no encontramos la pagina
        </h3>
        <span>
          <Link className='btn btn-danger' to={-1}>Regresar</Link>
        </span>
      </section>
    </div>
  )
}

export default NotFound