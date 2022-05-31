import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Fragment>
      <section className='container d-flex'>
        <section className='col-6'>
          <h3>
            Medico
          </h3>
          <Link className='btn btn-primary' to="/doctor/login">Login</Link>
        </section>
        <section className='col-6'>
          <h3>
            Paciente
          </h3>
          <Link className='btn btn-primary' to="/px/login">Login</Link>
        </section>
      </section>
    </Fragment>
  )
}

export default HomePage