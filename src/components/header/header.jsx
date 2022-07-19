import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

// components
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import NavBarItem from './NavBar/NavBarItem/NavBarItem'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import DropdownMenuItem from './DropdownMenu/DropDownMenuItem/DropDownMenuItem'
import Search from './Search/Search'
import SearchButtonImage from './Search/SearchButton/SearchButton'
import UserMenuButton from './UserMenu/UserMenuButton/UserMenuButton'

// styles
import './Header.css'

/* A React component. Render Logo, NavBar and Search with opportunity switching between them, 
  search button that change states on click, and user menu with dropdown menu on hover. */
const Header = () => {
  // NavBar and Search states
  // when true show the component
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
          <UserMenuButton>
            <DropdownMenu>
              <DropdownMenuItem path="/test">Test</DropdownMenuItem>
            </DropdownMenu>
          </UserMenuButton>
        </span>
      </div>
    </header>
  )
}

export default Header
