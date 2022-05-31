import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    id: "home",
    name: "Home",
    link: "/home"
  },
  {
    id: "login",
    name: "Login",
    link: "/login"
  },
  {
    id: "chat",
    name: "Chat",
    link: "/chat"
  }
]

function Navbar() {
  const history = useLocation()
  const [selected, setSelected] = useState("")

  const [expanded, setExpanded] = useState(false);

  const expand = () => setExpanded(true)

  const close = () => setExpanded(false)

  const handleSelect = (e) => {
    console.log("e.target.name", e.target.name)
    setSelected(e.target.name)
    close()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Chat App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        // onFocus={expand}
        >
          <span className="navbar-toggler-icon" onClick={() => {
            expanded ? close() : expand()
          }} />
        </button>
        <div className={`${!expanded && 'collapse scale-out-top'} navbar-collapse scale-in-top`} id="navbarNav">
          <ul
            className="navbar-nav"
            onBlur={close}
          >
            {
              navLinks.map(({ id, name, link }) => (
                <li className={`nav-item ${selected === id ? "active" : ""}`} key={name}>
                  <Link
                    className="nav-link"
                    to={link}
                    name={id}
                    onClick={(e) => handleSelect(e)}>
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar