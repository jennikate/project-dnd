import React from 'react'

//used for when we need to control titles, or if there are multiple condition checks
function setVisibility(item) {
  return item.length > 0 ? 'show' : 'hide'
}

export default setVisibility