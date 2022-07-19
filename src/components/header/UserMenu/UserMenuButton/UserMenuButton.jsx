import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// images
import UserMenuButtonImage from './avatar_profile_icon.png'

// styles
import UserMenuButtonStyle from './UserMenuButton.module.css'

const UserMenuButton = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <Router>
      <ul>
        <li
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <img
            className={UserMenuButtonStyle.UserMenuButton}
            src={UserMenuButtonImage}
            alt="UserMenuButtonImage"
          />

          {/* if open true show children */}
          {open && props.children}
        </li>
      </ul>
    </Router>
  )
}

export default UserMenuButton
