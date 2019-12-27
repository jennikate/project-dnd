import React, { useState, useEffect } from 'react'


const Abilities = (data) => {

  const [saves, setSaves] = useState([])

  useEffect(() => {
    setSaves(data.data.filter(elem => {
      return elem.key.includes('_save')
    }))
  }, [data])

  return (
    <div className='abilities'>
      <h2>Saving Throws</h2>
      {saves.map((elem, i) => {
        return (
          elem.value && <p key={i}>{elem.key.replace('_', ' ')}: {elem.value}</p>
        )
      })}
    </div>
  )
}

export default Abilities