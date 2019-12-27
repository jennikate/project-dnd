import React, { useState, useEffect } from 'react'
import arrayFromObj from '../../hooks/arrayFromObj'

const Type = (data) => {

  return (
    <>
      <section className='overview'>
        <h1>{data.data.name}</h1>
        <p className='subtitle'>{data.data.size} {data.data.type} {data.data.subtype && `(${data.data.subtype})`}</p>
        <p className='alignment'>{data.data.alignment}</p>
        <p>CR: {data.data.challenge_rating}</p>
        {data.data.languages && <p>Languages: {data.data.languages}</p>}
      </section>

      <section className='stats'>
        <p className='title'>Armour Class</p>
        <p>{data.data.armor_class} ({data.data.armor_desc})</p>
        <p className='title'>Hit Points</p>
        <p>{data.data.hit_points} ({data.data.hit_dice})</p>
        <p className='title'>Speed</p>
        {arrayFromObj(data.data.speed).map((elem, i) => {
          return (
            <p key={i}>{elem.type}: {elem.value}</p>
          )
        })}
      </section>
    </>
  )
}

export default Type