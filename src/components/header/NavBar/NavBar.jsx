import React from 'react'

// styles
import NavBarStyle from './NavBar.module.css'

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