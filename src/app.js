import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/style.scss'

import Home from './components/Home'
import MonsterList from './components/MonsterList'
import SingleMonster from './components/SingleMonster'
import Header from './components/Header'

const App = () => (
  <>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/monsters' component={MonsterList} />
        <Route exact path='/monsters/:slug' component={SingleMonster} />

      </Switch>
    </BrowserRouter>
  </>

)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

