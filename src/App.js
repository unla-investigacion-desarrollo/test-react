import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { DetailHook } from './pages/DetailHook'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import ComponentWithConnectionToRedux from './containers/Counter'

import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {
  render(){
    console.log('render App')
    return (
      <div className='App'>
        <p>Environment: {process.env.NODE_ENV}</p>
        <ComponentWithConnectionToRedux />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={DetailHook} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
