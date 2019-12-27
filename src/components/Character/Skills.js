import React from 'react'
import arrayFromObj from '../../hooks/arrayFromObj'

const Skills = (data) => {

  return (
    <div className='skills'>
      <h2>Skills</h2>
      {arrayFromObj(data.data.skills).map((elem, i) => {
        return (
          <p key={i}>{elem.type}: {elem.value}</p>
        )
      })}
    </div>
  )
}

export default Skills