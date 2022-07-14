import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NavBarItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Router>
            <li>
                <Link to={props.path} onMouseEnter={() => setOpen(!open)}>
                    {props.text}
                </Link>
            
                {/* if open true show children */}
                {open && props.children}
            </li>
        </Router>
        </>
    )
}



export default NavBarItem