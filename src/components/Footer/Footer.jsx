import React from 'react'

// styles
import FooterStyle from './Footer.module.css'

/**
 * This function returns a footer element with a paragraph element inside of it.
 * @returns A footer element with a paragraph element inside of it.
 */
const Footer = () => {
    return (
        <footer className={FooterStyle.Footer}>
            <p>Footer</p>
        </footer>
    )
}

export default Footer