import React from 'react'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import NavBarItem from './NavBar/NavBarItem/NavBarItem'
import DropdownMenu from './NavBar/DropdownMenu/DropdownMenu'
import DropdownMenuItem from './NavBar/DropdownMenu/DropDownMenuItem/DropDownMenuItem'

// styles
import './Header.module.css'

/**
 * Header is a function that returns a header element with a logo and a navbar with navbar items.
 * @returns A React Component
 */
const Header = () => {
    return (
        <header>
            <Logo />

            <NavBar>
                <NavBarItem path="/anime" text="Anime">
                    <DropdownMenu>
                        <DropdownMenuItem path="/test">Test</DropdownMenuItem>
                    </DropdownMenu>
                </NavBarItem>
                <NavBarItem path="/manga" text="Manga"></NavBarItem>
                <NavBarItem path="/community" text="Community"></NavBarItem>
            </NavBar>
        </header>
    )
}

export default Header