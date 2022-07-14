import React from 'react'
import {  Link } from 'react-router-dom'

// styles
import styles from './DropDown.module.css'

const DropdownMenuItem = (props) => {
    return (
        <>        
            <Link to="/" className={styles.MenuItem}>{props.children}</Link>
        </>            
    )
}

export default DropdownMenuItem