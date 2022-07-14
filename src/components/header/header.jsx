import React from 'react'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import NavBarItem from './NavBar/NavBarItem/NavBarItem'
import DropdownMenu from './NavBar/DropdownMenu/DropdownMenu'
import DropdownMenuItem from './NavBar/DropdownMenu/DropDownMenuItem'

// styles
import HeaderStyle from'./Header.module.css'

const Header = () => {
    return (
        <header className={HeaderStyle.Header}>
            <Logo />

            <NavBar>
                <NavBarItem path="/" text="Home">
                    <DropdownMenu>
                        <DropdownMenuItem>Test</DropdownMenuItem>
                    </DropdownMenu>
                </NavBarItem>
                <NavBarItem path="/anime" text="Anime"></NavBarItem>
                <NavBarItem path="/manga" text="Manga"></NavBarItem>
                <NavBarItem path="/community" text="Community"></NavBarItem>
            </NavBar>
        </header>
    )
}

export default Header