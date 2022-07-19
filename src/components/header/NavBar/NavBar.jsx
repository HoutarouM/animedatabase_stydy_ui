import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// styles
import './NavBar.module.css'

/**
 * The NavBar function returns a nav element with a className of NavBarStyle.NavBar, and the children
 * of the NavBar function are passed in as props.
 * @returns A navbar with a list of children.
 */
const NavBar = (props) => {
  return (
    <nav>
      <Router>
        <ul>{props.children}</ul>
      </Router>
    </nav>
  )
}

export default NavBar
