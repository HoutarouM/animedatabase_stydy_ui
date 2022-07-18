import React from 'react'

// images
import UserMenuButtonImage from './avatar_profile_icon.png'

// styles
import UserMenuButtonStyle from './UserMenuButton.module.css'

const UserMenuButton = () => {
  return (
    <>
      <img
        className={UserMenuButtonStyle.UserMenuButton}
        src={UserMenuButtonImage}
        alt="UserMenuButtonImage"
      />
    </>
  )
}

export default UserMenuButton
