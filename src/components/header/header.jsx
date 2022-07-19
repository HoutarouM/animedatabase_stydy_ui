import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

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
import './Header.css'

/**
 * Header is a function that returns a header element with a logo and a navbar with navbar items.
 * @returns A React Component
 */
const Header = () => {
  // TODO: add comment
  const [showNav, isShowNav] = useState(true)
  const [showSearch, isShowSearch] = useState(false)

  const navBarNodeRef = React.useRef(null)
  const searchNodeRef = React.useRef(null)

  return (
    <header>
      <div>
        <Logo />
      </div>

      <div>
        <CSSTransition
          nodeRef={navBarNodeRef}
          in={showNav}
          timeout={150}
          classNames="animation"
        >
          <div ref={navBarNodeRef}>
            {showNav && (
              <NavBar>
                <NavBarItem path="/anime" text="Anime">
                  <DropdownMenu>
                    <DropdownMenuItem path="/test">Test</DropdownMenuItem>
                  </DropdownMenu>
                </NavBarItem>
                <NavBarItem path="/manga" text="Manga"></NavBarItem>
                <NavBarItem path="/community" text="Community"></NavBarItem>
              </NavBar>
            )}
          </div>
        </CSSTransition>

        <CSSTransition
          nodeRef={searchNodeRef}
          in={showSearch}
          timeout={150}
          classNames="animation"
        >
          <div ref={searchNodeRef}>{showSearch && <Search />}</div>
        </CSSTransition>
      </div>

      <div className="RightMenuWrapper">
        <span
          onClick={() => {
            isShowNav(!showNav)
            isShowSearch(!showSearch)
          }}
        >
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
