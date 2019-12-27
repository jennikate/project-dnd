import React from 'react'

//set visibility controls, pass in a condition that returns true if we want to hide things
//used for when there are multiple conditionals to test
function setVisibility(item) {
  console.log(item)
  return item === true ? 'hide' : 'show'
}

export default setVisibility