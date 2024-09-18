import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div >
        <h1 className="bg-[#FFF] mt-4 p-5 rounded-lg">{title}</h1>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.object
}

export default Bookmark