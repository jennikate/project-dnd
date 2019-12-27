import React from 'react'
import setVisibility from '../../hooks/setVisibility'

const Abilities = (data) => {

  //turn strings into usable arrays
  function makeArray(list) {
    return list.replace(';', ',').replace('and', '').split(', ')
  }

  return (
    <div>
      <div className='abilities'>

        <h2 className={setVisibility(data.data.damage_immunities === '' && data.data.damage_resistances === '' && data.data.damage_vulnerabilities === '')}>Damage</h2>

        {data.data.damage_vulnerabilities &&
          <div className='ability-type'>
            <h3>Vulnerabilities</h3>
            <ul>
              {makeArray(data.data.damage_vulnerabilities).map((elem, i) => {
                return <li key={i}>{elem}</li>
              })}
            </ul>
          </div>
        }

        {data.data.damage_resistances &&
          <div className='ability-type'>
            <h3>Resistances</h3>
            <ul>
              {makeArray(data.data.damage_resistances).map((elem, i) => {
                return <li key={i}>{elem}</li>
              })}
            </ul>
          </div>
        }

        {data.data.damage_immunities &&
          <div className='ability-type'>
            <h3>Immunities</h3>
            <ul>
              {makeArray(data.data.damage_immunities).map((elem, i) => {
                return <li key={i}>{elem}</li>
              })}
            </ul>
          </div>
        }

        {data.data.condition_immunities &&
          <h2>Condition</h2>
        }
        {data.data.condition_immunities &&
          <div className='ability-type'>
            <h3>Immunities</h3>
            <ul>
              {makeArray(data.data.condition_immunities).map((elem, i) => {
                return <li key={i}>{elem}</li>
              })}
            </ul>
          </div>
        }

        {data.data.senses &&
          <h2>Senses</h2>
        }
        <ul>
          {makeArray(data.data.senses).map((elem, i) => {
            return <li key={i}>{elem}</li>
          })}
        </ul>

      </div>
    </div>

  )
}

export default Abilities
