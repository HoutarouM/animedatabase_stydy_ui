import React from 'react'

// styles
import NavBarStyle from './NavBar.module.css'

/**
 * The NavBar function returns a nav element with a className of NavBarStyle.NavBar, and the children
 * of the NavBar function are passed in as props.
 * @returns A navbar with a list of children.
 */
const NavBar = (props) => {
    return (
        <nav className={NavBarStyle.NavBar}>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default NavBar