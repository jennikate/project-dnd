/* eslint-disable brace-style */
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

import CoreStats from './Character/CoreStats'
import Saves from './Character/Saves'
import Type from './Character/Type'
import Abilities from './Character/Abilities'
import Skills from './Character/Skills'
import Actions from './Character/Actions'
import Legendary from './Character/Legendary'
import CharSpells from './Character/CharSpells'



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
      <div className='container monster'>
        <Type data={monster} />
        <CoreStats data={monster} />
        <Saves data={monsterArray} />
        <Abilities data={monster} />
        <Skills data={monster} />
        <Actions data={monster} />
        <Legendary data={monster} />
        <CharSpells data={monster} />
      </div>
    </section>
  )
}

export default SingleMonster
