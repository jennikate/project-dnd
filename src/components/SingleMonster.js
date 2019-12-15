/* eslint-disable brace-style */
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'




const SingleMonster = (props) => {

  //get the single monster data
  const monster = useFetch(`https://api.open5e.com/monsters/${props.match.params.slug}`)


  //turn the objects we need into arrays for us to map :: can probably extract some of these out to function/calculations later
  const [monsterArray, setMonsterArray] = useState([])
  const [speed, setSpeed] = useState([])
  const [saves, setSaves] = useState([])

  //create array from monster object
  function makeMonsterArray() {
    let monsterDetail = []
    for (const [key, value] of Object.entries(monster)) {
      monsterDetail = [...monsterDetail]
      monsterDetail.push({ key, value })
      setMonsterArray(monsterDetail)
    }
  }

  // //create array from speed object so can map them
  function getSpeed() {
    const speedArr = []
    if (monster.length === 0) {
      console.log('waiting on data')
    }
    else {
      for (const [key, value] of Object.entries(monster.speed)) {
        speedArr.push({ type: key, speed: value })
      }
      setSpeed(speedArr)
    }
  }

  //create array of save stats
  function getSaves() {
    if (monsterArray.length === 0) {
      console.log('saves - waiting on data')
    }
    else {
      console.log('saves got data')
      const saves = monsterArray.filter(elem => {
        return elem.key.includes('_save')
      })
      setSaves(saves)
    }
  }


  //calculate the monster stat modifier (can probably extract this to calculations later)
  //round down (stat - 10 ) / 2
  function statModifier(stat) {
    return Math.floor((stat - 10) / 2)
  }










  //run the functions when the monster data changes
  useEffect(() => {
    makeMonsterArray()
    getSpeed()
    getSaves()
  }, [monster])
  //run when monsterDetail array is populated
  useEffect(() => {
    getSaves()
  }, [monsterArray])


  //loading
  if (monster.length === 0) {
    return <h1>Loading</h1>
  }
  return (
    <div>

      <div className='card monster'>
        <section className='overview'>
          <h1>{monster.name}</h1>
          <p className='subtitle'>{monster.size} {monster.type} {monster.subtype && `(${monster.subtype})`}</p>
        </section>

        <section className='stats'>
          <p className='title'>Armour Class</p>
          <p>{monster.armor_class} ({monster.armor_desc})</p>
          <p className='title'>Hit Points</p>
          <p>{monster.hit_points} ({monster.hit_dice})</p>
          <p className='title'>Speed</p>
          {speed.map((elem, i) => {
            return (
              <p key={i}>{elem.type}: {elem.speed}</p>
            )
          })}
          <div className='core-stats'>
            <ul>
              <li>
                <span className='title'>STR</span>
                <span>{monster.strength} ( {statModifier(monster.strength)} )</span>
              </li>
              <li>
                <span className='title'>DEX</span>
                <span>{monster.dexterity} ( {statModifier(monster.dexterity)} )</span>
              </li>
              <li>
                <span className='title'>CON</span>
                <span>{monster.constitution} ( {statModifier(monster.constitution)} )</span>
              </li>
              <li>
                <span className='title'>INT</span>
                <span>{monster.intelligence} ( {statModifier(monster.intelligence)} )</span>
              </li>
              <li>
                <span className='title'>CHA</span>
                <span>{monster.charisma} ( {statModifier(monster.charisma)} )</span>
              </li>
              <li>
                <span className='title'>WIS</span>
                <span>{monster.wisdom} ( {statModifier(monster.wisdom)} )</span>
              </li>
            </ul>
          </div>
        </section>


        <section className='abilities'>
          <p className='title'>Saving Throws</p>
          {saves.map((elem, i) => {
            return (
              elem.value && <p key={i}>{elem.key.replace('_', ' ')}: {elem.value}</p>
            )
          })}
        </section>


        <section className='actions'>

        </section>
        <section className='legendary-actions'>

        </section>
      </div>

    </div >
  )
}

export default SingleMonster
