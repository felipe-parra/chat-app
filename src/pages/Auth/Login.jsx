import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  typeUser: 'px'
}

function Login() {
  const [dataForm, setDataForm] = useState(initialState)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleChange = e => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('dataForm', dataForm)
    navigate('/chat', {
      replace: true, state: {
        typeUser: pathname === '/doctor/login' ? 'doctor' : 'px',
        name: dataForm.email !== '' ? dataForm.email : typeUser
      }
    })
  }
  return (
    <div className='col-6 mx-auto mt-3'>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            autoComplete='true'
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name='password'
            value={dataForm.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group form-check ml-auto">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default Login