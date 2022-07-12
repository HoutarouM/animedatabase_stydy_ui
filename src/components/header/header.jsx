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
                <NavBarItem href="#">Home</NavBarItem>
                <NavBarItem href="#">Anime</NavBarItem>
                <NavBarItem href="#">Manga</NavBarItem>
                <NavBarItem href="#">Community</NavBarItem>
            </NavBar>
        </header>
    )
}

export default Header