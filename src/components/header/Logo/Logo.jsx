import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// styles
import LogoStyle from './Logo.module.css'

/**
 * This function returns a div that contains a link to the homepage, which contains a h2 element with
 * the className LogoStyle.LogoFontStyle.
 * @returns A React component.
 */
const Logo = () => {
    return (
        <div>
            <Router>
                <Link to='/'>
                    <h2 className={LogoStyle.LogoFontStyle}>
                        【ａｎｉｍｅｄａｔａｂａｓｅ】
                    </h2>
                </Link>
            </Router>            
        </div>
    )
}

export default Logo