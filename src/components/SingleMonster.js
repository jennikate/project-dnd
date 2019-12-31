/* eslint-disable brace-style */
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

import CoreStats from './Character/CoreStats'
import Saves from './Character/Saves'
import Type from './Character/Type'
import Abilities from './Character/Abilities'
import Skills from './Character/Skills'
import Languages from './Character/Languages'
import Challenge from './Character/Challenge'
import SpecialAbilities from './Character/SpecialAbilities'
import Actions from './Character/Actions'
import Legendary from './Character/Legendary'



const SingleMonster = (props) => {
  //get the single monster data
  const monster = useFetch(`https://api.open5e.com/monsters/${props.match.params.slug}`)

  //turn the monster data into an array
  const [monsterArray, setMonsterArray] = useState([])

  function makeMonsterArray() {
    let monsterDetail = []
    for (const [key, value] of Object.entries(monster)) {
      monsterDetail = [...monsterDetail]
      monsterDetail.push({ key, value })
      setMonsterArray(monsterDetail)
    }
  }

  //run the functions when the monster data changes
  useEffect(() => {
    makeMonsterArray()
  }, [monster])


  //loading
  if (monster.length === 0) {
    return <h1>Loading</h1>
  }
  return (
    <section className='section'>
      <div className='container dnd-card'>
        <Type data={monster} />
        <CoreStats data={monster} />
        <div className='dnd-section'>
          <Saves data={monsterArray} />
          <Skills data={monster} />
          <Abilities data={monster} />
          <Languages data={monster} />
          <Challenge data={monster} />
        </div>
        <div className='dnd-block'>
          <SpecialAbilities data={monster} />
          <Actions data={monster} />
          <Legendary data={monster} />
        </div>
      </div>
    </section>
  )
}

export default SingleMonster
