import React from 'react'
import {  Link } from 'react-router-dom'

// styles
import styles from '../DropDown.module.css'

/**
 * DropdownMenuItem is a function that returns a Link component with a path and children props.
 */
const DropdownMenuItem = (props) => {
    return (
        <>        
            <Link to={props.path} className={styles.MenuItem}>{props.children}</Link>
        </>            
    )
}

export default DropdownMenuItem