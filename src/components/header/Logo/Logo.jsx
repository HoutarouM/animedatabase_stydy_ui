import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// styles
import LogoStyle from './Logo.module.css'

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