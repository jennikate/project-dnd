import React from 'react'


const CoreStats = (data) => {

  //round down (stat - 10 ) / 2
  function statModifier(stat) {
    return Math.floor((stat - 10) / 2)
  }


  return (
    < div className='core-stats' >
      <ul>
        <li>
          <span className='title'>STR</span>
          <span>{data.data.strength} ( {statModifier(data.data.strength)} )</span>
        </li>
        <li>
          <span className='title'>DEX</span>
          <span>{data.data.dexterity} ( {statModifier(data.data.dexterity)} )</span>
        </li>
        <li>
          <span className='title'>CON</span>
          <span>{data.data.constitution} ( {statModifier(data.data.constitution)} )</span>
        </li>
        <li>
          <span className='title'>INT</span>
          <span>{data.data.intelligence} ( {statModifier(data.data.intelligence)} )</span>
        </li>
        <li>
          <span className='title'>WIS</span>
          <span>{data.data.wisdom} ( {statModifier(data.data.wisdom)} )</span>
        </li>
        <li>
          <span className='title'>CHA</span>
          <span>{data.data.charisma} ( {statModifier(data.data.charisma)} )</span>
        </li>
      </ul>
    </div >
  )
}


export default CoreStats
