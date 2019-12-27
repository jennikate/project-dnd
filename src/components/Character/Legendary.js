import React from 'react'

const Legendary = (data) => {

  return (
    <div>
      {data.data.legendary_actions &&
        <>
          <h2>Legendary Actions</h2>
          <p>{data.data.legendary_desc}</p>
          <ul>
            {data.data.legendary_actions.map((elem, i) => {
              return (
                <li key={i}><span className='inline-title'>{elem.name}</span>: {elem.desc}</li>
              )
            })}
          </ul>
        </>
      }
      {data.data.special_abilities &&
        <>
          <h3>Special Abilities</h3>
          <ul>
            {data.data.special_abilities.map((elem, i) => {
              return (
                <li key={i}><span className='inline-title'>{elem.name}</span>: {elem.desc}</li>
              )
            })}
          </ul>
        </>
      }
    </div>
  )
}

export default Legendary
