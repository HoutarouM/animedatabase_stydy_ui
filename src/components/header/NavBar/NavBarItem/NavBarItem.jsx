import React from 'react'

const NavBarItem = (props) => {
    return (
        <>
            {/* TODO: Change a link on Link from react router dom */}
            <li>
                <a href={props.href}>{props.children}</a>
            </li>
        </>
    )
}

export default NavBarItem