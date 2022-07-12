import React from 'react'
import { Link } from 'react-router-dom'

const NavBarItem = (props) => {
    return (
        <>
            <li>
                <Link to={props.href}>{props.children}</Link>
            </li>
        </>
    )
}

export default NavBarItem