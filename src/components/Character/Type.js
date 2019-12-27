import React from 'react'
import arrayFromObj from '../../hooks/arrayFromObj'

const Type = (data) => {

  return (
    <div className='overview'>
      <div className='flex-horizontal'>
        <h1>{data.data.name}</h1>
        <p>CR: {data.data.challenge_rating}</p>
      </div>

      <div>
        <p>{data.data.size} {data.data.type}{data.data.subtype && ` (${data.data.subtype})`}, {data.data.alignment}</p>
        {data.data.languages && <p>Languages: {data.data.languages}</p>}
        <p>Speed:</p>
        {arrayFromObj(data.data.speed).map((elem, i) => {
          return (
            <p key={i}><span className='stat-title'>{elem.type}</span> <span className='stat-value'>{elem.value}</span></p>
          )
        })}
      </div>

      <div className='flex-horizontal'>
        <div className='card stats'>
          <p className='stat-title'>Armour Class</p>
          <p className='stat-value'>{data.data.armor_class}</p>
          <p>({data.data.armor_desc})</p>
        </div>

        <div className='card stats'>
          <p className='stat-title'>Hit Points</p>
          <p className='stat-value'>{data.data.hit_points}</p>
          <p>({data.data.hit_dice})</p>
        </div>
      </div>

    </div>
  )
}

export default Type