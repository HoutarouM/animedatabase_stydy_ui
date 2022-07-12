import React from 'react'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import NavBarItem from './NavBar/NavBarItem/NavBarItem'

// styles
import HeaderStyle from'./Header.module.css'

const Header = () => {
    return (
        <header className={HeaderStyle.Header}>
            <Logo />

            <NavBar>
                <NavBarItem path="/">Home</NavBarItem>
                <NavBarItem path="/anime">Anime</NavBarItem>
                <NavBarItem path="/manga">Manga</NavBarItem>
                <NavBarItem path="/community">Community</NavBarItem>
            </NavBar>
        </header>
    )
}

export default Header