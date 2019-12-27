import React from 'react'

const Actions = (data) => {

  return (
    <div>
      <h2>Actions</h2>
      {data.data.actions.map((elem, i) => {
        return (
          <div key={i}>
            <h3>{elem.name}</h3>
            <p>{elem.desc}</p>
            {elem.attack_bonus && <p>Attack bonus: {elem.attack_bonus}</p>}
            {elem.damage_dice && <p>Damage dice: {elem.damage_dice}</p>}
            {elem.damage_bonus && <p>Damage bonus: {elem.damage_bonus}</p>}
          </div>
        )
      })}
      {data.data.reactions &&
        <>
          <h2>Reactions</h2>
          {data.data.reactions.map((elem, i) => {
            return (
              <div key={i}>
                <h3>{elem.name}</h3>
                <p>{elem.desc}</p>
                {elem.attack_bonus && <p>Attack bonus: {elem.attack_bonus}</p>}
                {elem.damage_dice && <p>Damage dice: {elem.damage_dice}</p>}
                {elem.damage_bonus && <p>Damage bonus: {elem.damage_bonus}</p>}
              </div>
            )
          })}
        </>
      }
    </div>
  )
}

export default Actions