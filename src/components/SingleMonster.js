import React from 'react'
import useFetch from '../hooks/useFetch'
import MonsterList from './MonsterList'


//need to actually pass down the proprs here cause otherwise how does it know what slug is

const SingleMonster = (props) => {

  //get the single monster api structre
  const slug = this.props.match.params.slug
  const data = useFetch(`https://api.open5e.com/monsters/${slug}`)
  
  return (
    <div>
      <h1>RAWR Monster</h1>
      {data.map((monster, i) => {
        return (
          <p key={i}>  
            {monster.name}
          </p>
        )
      })}
    </div>
  )
}

export default SingleMonster
