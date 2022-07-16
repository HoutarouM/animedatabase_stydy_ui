import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

/**
 * The NavBarItem function is a React component that renders a list item with a link to a path and a
 * dropdown menu if the open state is true.
 * @returns A React component that renders a link and its children.
 */
const NavBarItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Router>
            <li onMouseEnter={() => setOpen(true)} 
                onMouseLeave={() => setOpen(false)}>
                    
                <Link to={props.path}>
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