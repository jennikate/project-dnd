import React from 'react'

const Abilities = (data) => {

  //turn strengs into usable arrays
  function makeArray(list) {
    return list.replace(';', ',').replace('and', '').split(', ')
  }

  return (
    <div>
      <section className='abilities'>
        <h2>Damage</h2>
        <p>Vulnerabilities</p>
        <ul>
          {makeArray(data.data.damage_vulnerabilities).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>
        <p>Resistances</p>
        <ul>
          {makeArray(data.data.damage_resistances).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>
        <p>Immunities</p>
        <ul>
          {makeArray(data.data.damage_immunities).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>
        <h2>Condition</h2>
        <p>Immunities</p>
        <ul>
          {makeArray(data.data.condition_immunities).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>

        <h2>Senses</h2>
        <ul>
          {makeArray(data.data.senses).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>

      </section>
    </div>

  )
}

export default Abilities


// "damage_vulnerabilities": "",
//   "damage_resistances": "",
//   "damage_immunities": "fire, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
//   "condition_immunities": "charmed, frightened, paralyzed, poisoned",
//   "senses": "blindsight 120 ft., passive Perception 10",