import React from 'react'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'

// styles
import HeaderStyle from'./Header.module.css'

const Header = () => {
    return (
        <header className={HeaderStyle.Header}>
            <Logo />

            <NavBar />
        </header>
    )
}

export default Header