import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

  const [monsters, setMonsters] = useState([])
  useEffect(() => {
    axios.get('https://api.open5e.com/monsters/?limit=100')
      .then(resp => setMonsters(resp.data.results))
      .catch(err => console.log(err))
  })

  return (
    <div>
      <h1>Monster List</h1>
      {monsters.map((monster, i) => {
        return (
          <p key={i}>{monster.name}</p>
        )
      })}
    </div>
  )
}



//========
// Original, using class
//========
// class Home extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       monsterList: [],
//       singleMonster: ''
//     }
//   }

//   componentDidMount() {
//     this.getMonsters()
//   }


//   getMonsters() {
//     axios.get('https://api.open5e.com/monsters/')
//       // .then(resp => console.log(resp.data.results))
//       .then(resp => this.setState({ monsterList: resp.data.results }))
//       .catch(err => this.setState({ errors: err.response.data.error }))
//       .then(console.log('gottem'))
//   }





//   render() {
//     if (!this.state.monsterList.length === 0) {
//       return <h1>Loading Monsters</h1>
//     }
//     console.log(this.state.monsterList)
//     return (
//       <div>
//         <p>Hi</p>

//         {this.state.monsterList.map((elem, i) => {
//           return (
//             <div key={i}>
//               <p>{elem.name}</p>
//             </div>
//           )
//         })}

//       </div>
//     )
//   }

// }

export default Home
