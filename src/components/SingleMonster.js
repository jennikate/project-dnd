/* eslint-disable brace-style */
import React from 'react'
import useFetch from '../hooks/useFetch'




const SingleMonster = (props) => {
  //get the single monster data
  const slug = props.match.params.slug
  const monster = useFetch(`https://api.open5e.com/monsters/${slug}`)

  //

  // console.log(typeof monster.speed)
  // if (!monster.speed) { console.log('loading') } else {
  //   console.log(Object.keys(monster.speed))
  //   console.log(Object.values(monster.speed))
  // }

  //calculate the monster stat modifier (can probably extract this to calculations later)
  //round down (stat - 10 ) / 2
  function statModifier(stat) {
    return Math.floor((stat - 10) / 2)
  }


  // //Find the saves
  function saveStats() {

    //I think I should be able to map or filter this, but monster is an object and I ran into trouble so using for atm
    for (var key in monster) {
      if (key.endsWith('_save') && monster[key] !== null) {
        const saveKey = key
        const saveValue = monster[key]
        return saveKey, saveValue
      }
    }
  }

  //loading
  if (monster.data === 0) {
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
          {/* {Object.entries(monster.speed).map(([key, value]) => {
            return (
              <p key={key}>{key}, {value}</p>
            )
          })} */}
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
            {saveStats(() => {
              console.log(saveKey, saveValue)
              return (
                <p>{saveKey}, {saveValue}</p>
              )
            })}
          </div>
        </section>


        <section className='abilities'>
          <p className='title'>Saving Throws</p>
          <p></p>
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
