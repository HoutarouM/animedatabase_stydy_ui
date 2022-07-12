import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NavBarItem = (props) => {
    return (
        <>
        <Router>
            <li>
                <Link to={props.path}>{props.children}</Link>
            </li>
        </Router>
        </>
    )
}

export default NavBarItem