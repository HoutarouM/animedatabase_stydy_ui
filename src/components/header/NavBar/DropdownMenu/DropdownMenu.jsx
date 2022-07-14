import React from 'react'

// styles
import styles from './DropDown.module.css'

const DropdownMenu = (props) => {   
    return (
        <div className={styles.DropdownMenu}>
                {props.children}
        </div>
    )
}

export default DropdownMenu