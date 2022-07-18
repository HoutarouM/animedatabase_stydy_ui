import React from 'react'

// images
import SearchImage from './search_icon.png'

// style
import SearchButtonStyle from './SearchButton.module.css'

const SearchButton = () => {
  return (
    <>
      <img
        className={SearchButtonStyle.SearchButton}
        src={SearchImage}
        alt="SearchButtonImage"
      />
    </>
  )
}

export default SearchButton
