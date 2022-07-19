import React from 'react'

// styles
import styles from './DropDown.module.css'

/**
 * DropdownMenu is a function that returns a div with the className of DropdownMenu and the children of
 * the props object.
 * @returns A div with the className of DropdownMenu and the children of the DropdownMenu component.
 */
const DropdownMenu = (props) => {   
    return (
        <div className={styles.DropdownMenu}>
                {props.children}
        </div>
    )
}

export default DropdownMenu