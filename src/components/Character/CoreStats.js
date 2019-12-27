import React from 'react'

const CoreStats = (data) => {

  //round down (stat - 10 ) / 2
  function statModifier(stat) {
    return Math.floor((stat - 10) / 2)
  }

  return (
    <div className='core-stats'>

      <div className='flex-horizontal'>
        <div className='card stats'>
          <p className='stat-title'>STR</p>
          <p className='stat-value'>{data.data.strength}</p>
          <p>({statModifier(data.data.strength)})</p>
        </div>
        <div className='card stats'>
          <p className='stat-title'>DEX</p>
          <p className='stat-value'>{data.data.dexterity}</p>
          <p>({statModifier(data.data.dexterity)})</p>
        </div>
        <div className='card stats'>
          <p className='stat-title'>CON</p>
          <p className='stat-value'>{data.data.constitution}</p>
          <p>({statModifier(data.data.constitution)})</p>
        </div>
        <div className='card stats'>
          <p className='stat-title'>INT</p>
          <p className='stat-value'>{data.data.intelligence}</p>
          <p>({statModifier(data.data.intelligence)})</p>
        </div>
        <div className='card stats'>
          <p className='stat-title'>WIS</p>
          <p className='stat-value'>{data.data.wisdom}</p>
          <p>({statModifier(data.data.wisdom)})</p>
        </div>
        <div className='card stats'>
          <p className='stat-title'>CHA</p>
          <p className='stat-value'>{data.data.charisma}</p>
          <p>({statModifier(data.data.charisma)})</p>
        </div>
      </div>
    </div>
  )
}


export default CoreStats
