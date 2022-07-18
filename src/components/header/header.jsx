import React, { useState } from 'react'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import NavBarItem from './NavBar/NavBarItem/NavBarItem'
import DropdownMenu from './NavBar/DropdownMenu/DropdownMenu'
import DropdownMenuItem from './NavBar/DropdownMenu/DropDownMenuItem/DropDownMenuItem'
import Search from './Search/Search'
import SearchButtonImage from './Search/SearchButton/SearchButton'
import UserMenuButton from './UserMenu/UserMenuButton/UserMenuButton'

// styles
import HeaderStyle from './Header.module.css'

/**
 * Header is a function that returns a header element with a logo and a navbar with navbar items.
 * @returns A React Component
 */
const Header = () => {
  /* If showNav show nav bar 
   else show search*/
  const [showNav, isShowNav] = useState(true)

  return (
    <header>
      <div>
        <Logo />
      </div>

      <div>
        {showNav ? (
          <NavBar>
            <NavBarItem path="/anime" text="Anime">
              <DropdownMenu>
                <DropdownMenuItem path="/test">Test</DropdownMenuItem>
              </DropdownMenu>
            </NavBarItem>
            <NavBarItem path="/manga" text="Manga"></NavBarItem>
            <NavBarItem path="/community" text="Community"></NavBarItem>
          </NavBar>
        ) : (
          <Search />
        )}
      </div>

      <div className={HeaderStyle.RightMenuWrapper}>
        <span onClick={() => isShowNav(!showNav)}>
          <SearchButtonImage />
        </span>

        <span>
          <UserMenuButton />
        </span>
      </div>
    </header>
  )
}

export default Header
