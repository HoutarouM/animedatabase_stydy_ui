import React from 'react'
import Logo from '../Logo/Logo'
import HeaderStyles from './Header.module.css'

const Header = () => {
    return (
        <header className={HeaderStyles.Header}>
            <Logo />
        </header>
    )
}

export default Header