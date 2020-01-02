import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import calcThreshold from './calcThreshold'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'



const encounterGenerator = () => {

  // (move to Db and call via API in future)

  const xpMonsterCr = [
    { cr: '0', xp: 10 },
    { cr: '1/8', xp: 25 },
    { cr: '1/4', xp: 50 },
    { cr: '1/2', xp: 100 },
    { cr: 1, xp: 200 },
    { cr: 2, xp: 450 },
    { cr: 3, xp: 700 },
    { cr: 4, xp: 1100 },
    { cr: 5, xp: 1800 },
    { cr: 6, xp: 2300 },
    { cr: 7, xp: 2900 },
    { cr: 8, xp: 3900 },
    { cr: 9, xp: 5000 },
    { cr: 10, xp: 5900 },
    { cr: 11, xp: 7200 },
    { cr: 12, xp: 8400 },
    { cr: 13, xp: 10000 },
    { cr: 14, xp: 11500 },
    { cr: 15, xp: 13000 },
    { cr: 16, xp: 15000 },
    { cr: 17, xp: 18000 },
    { cr: 18, xp: 20000 },
    { cr: 19, xp: 22000 },
    { cr: 20, xp: 25000 },
    { cr: 21, xp: 33000 },
    { cr: 22, xp: 41000 },
    { cr: 23, xp: 50000 },
    { cr: 24, xp: 62000 },
    { cr: 30, xp: 155000 }
  ]

  function calculateMonsterCRs(diffLevel) {
    return xpMonsterCr.filter(cr => cr.xp <= diffLevel)
  }


  // once we get a form up, the results will plug into here to run the calculations
  // const formResult = calcThreshold('medium', [3, 2, 3, 3])
  // const crOptions = calculateMonsterCRs(formResult)
  // const crMax = crOptions[crOptions.length - 1].cr

  const [count, setCount] = useState(0)
  const [players, setPlayers] = useState([]) //figure out how to populate this on add or subtract so then can map it to UI to ask user to enter player levels

  const handleClick = (e, operator) => {
    e.preventDefault()
    if ( operator === 'add' ) {
      setCount(count + 1)
      setPlayers([...players, 'player' + (count + 1)])
    } else if ( operator === 'subtract') {
      setCount(count - 1)
      players.pop()
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <h1>Encounter Generator</h1>

      <form className='form'>

        <div className='field'>
          <label className='label'>Number of players</label>
          <div className='flex-horizontal'>
            <button className='counter' onClick={(e) => handleClick(e, 'subtract')}><FontAwesomeIcon icon={faMinus} /></button>
            <p className='counter input' type='text' name='playerCount'>{count}</p>
            <button className='counter' onClick={(e) => handleClick(e, 'add')}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Player level</label>
          {players && 
            players.map((elem, i) => {
              return (
                <p key={i}>{elem}</p>
              )
            })
          } 
        </div>

        <button onClick={handleSubmit}>Calculate</button>
      </form>

    </>
  )
}

export default encounterGenerator

{/* <p>Mode: Medium (note, will get this from the form)</p>
      <p>XP Threshold for monster selection : {formResult}</p>
      <p>You can consider monsters up to CR level : {crMax}</p> */}