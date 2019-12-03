import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const MonsterList = () => {

  const data = useFetch('https://api.open5e.com/monsters/?page=1')
  const results = data.results
  console.log(results)
  
  //letting this fail for the moment as ultimately this will be stored in backend and called from there so I can control data structre
  return (
    <div>
      <h1>Monster List</h1>
      {/* {results.map((monster, i) => {
        return (
          <p key={i}>  
            <Link to={`/monsters/${monster.slug}`}>{monster.name}</Link>
          </p>
        )
      })} */}
    </div>
  )
}

export default MonsterList
