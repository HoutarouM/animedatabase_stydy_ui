import React from 'react'

// images
import SearchImage from './search_icon.png'

// style
import SearchButtonStyle from './SearchButton.module.css'

/**
 * This function returns an image with the className of SearchButtonStyle.SearchButton and the source
 * of SearchImage and the alt of SearchButtonImage.
 */
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
