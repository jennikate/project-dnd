import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

 


  return (
    <div>
      <h1>Welcome to the monsters!</h1>
      <Link to='/monsters'>View monster list</Link>
    </div>
  )
}

export default Home
