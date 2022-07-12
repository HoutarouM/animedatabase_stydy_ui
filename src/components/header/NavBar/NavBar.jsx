import React from 'react'

// styles
import NavBarStyle from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={NavBarStyle.NavBar}>
            <ul>
                {/* TODO: Change a link on Link from react router dom */}
                <li>
                    <a href="#">Anime</a>
                </li>
                <li>
                    <a href="#">Manga</a>
                </li>
                <li>
                    <a href="#">Community</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar