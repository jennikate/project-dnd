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
  const [diffLevel, setDiffLevel] = useState(0)

  const [pNum, setPNum] = useState(0)
  const [pInput, setPInput] = useState([])  //used to create input fields to take player leve
  const [pSameLevel, setPSameLevel] = useState('No')
  const [pLevels, setPLevels] = useState([])



  const setPlayerLevelStatus = (e) => {
    setPSameLevel(e.target.value)
    if (e.target.value === 'Yes') { 
      setPInput([]) 
      setPLevels([]) //clear any plevels
    }
  }


  const handleAddSubtract = (e, operator) => {
    e.preventDefault()
    //if user clicks add, increase the number of players (pNum) 
    if (operator === 'add') {
      setPNum(pNum + 1)
      //and if they have stated that all players are not the same level, then add an input field for each players level (pInput)
      if (pSameLevel === 'No') { setPInput([...pInput, 'Player ' + (pNum + 1)]) }
    //if user clicks subtract
    } else if (operator === 'subtract') {
      //reduce the number of players
      setPNum(pNum - 1)
      //remove the level from level array if it exists
      pLevels.pop() 
      //and if they have stated that all players are not the same level, then remove an input field, and remove the level from the levels array
      if (pSameLevel === 'No') { 
        pInput.pop()  //remove the input field (always just drops last field)
      }
    }
  }

  const handleLevelChange = (e) => {
    const newArr = []
    if (pSameLevel === 'Yes') {
      for (let i = 0; i < pNum; i++) {
        newArr.push(e.target.value) //if all players are same level is YES, then loops through number of players creating an array of levels for them
      }
      setPLevels(newArr) 
    } else {
      setPLevels([...pLevels, e.target.value]) //if all players are same level is NO, this takes the levels as entered and adds to array
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    setDiffLevel(calcThreshold('medium', pLevels))
  }


  return (
    <>
      <h1>Encounter Generator</h1>

      <form className='form'>
        <h2>Players</h2>

        <div className='field' onChange={e => setPlayerLevelStatus(e)}>
          <label className='label'>Are all players the same level?</label>
          <label className='radio-container'>Yes
            <input type='radio' name='radio' value='Yes' />
            <span className='checkmark'></span>
          </label>
          <label className='radio-container'>No
            <input type='radio' name='radio' value='No' defaultChecked />
            <span className='checkmark'></span>
          </label>
        </div>

        <div className='field'>
          <label className='label'>Number of players</label>
          <div className='flex-horizontal'>
            <button className='counter' onClick={(e) => handleAddSubtract(e, 'subtract')}><FontAwesomeIcon icon={faMinus} /></button>
            <p className='counter input' type='text' name='playerCount'>{pNum}</p>
            <button className='counter' onClick={(e) => handleAddSubtract(e, 'add')}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Player level</label>
          {(pSameLevel === 'No' && pInput) &&
            pInput.map((elem, i) => {
              return (
                <div key={i} className='flex-horizontal'>
                  <p>Player level:</p>
                  <input className='counter input' type='text' onChange={e => handleLevelChange(e)} />
                </div>
              )
            })
          }
          {(pSameLevel === 'Yes') &&
            <div className='flex-horizontal'>
              <p>Players level:</p>
              <input className='counter input' type='text' onChange={e => handleLevelChange(e)} />
            </div>
          }
        </div>



        <button onClick={e => handleSubmit(e)}>Calculate</button>
      </form>
      
      <h2>{diffLevel}</h2>

    </>
  )
}

export default encounterGenerator

{/* <p>Mode: Medium (note, will get this from the form)</p>
      <p>XP Threshold for monster selection : {formResult}</p>
      <p>You can consider monsters up to CR level : {crMax}</p> */}