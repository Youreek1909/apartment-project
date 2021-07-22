import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './layout/Home'
import InteriorStyle from './layout/InteriorStyle'
import FloorStyle from './layout/FloorStyle'
import Summary from './layout/Summary'
import Kitchen from './layout/Kitchen'



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/interiorStyle' component={InteriorStyle} />
        <Route exact path='/summary' component={Summary} />
        <Route exact path='/floorStyle' component={FloorStyle} />
        <Route exact path='/kitchen' component={Kitchen} />
      </Switch>
    </Router>
  );
}