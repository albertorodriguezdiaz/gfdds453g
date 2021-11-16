import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';



export class App extends Component {
  render() {
    return (
      <div>

        <nav>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </nav>

        {/* <Router> */}
          <Switch>
            <Route exact path="/" component={App}>
              <Redirect to='page1'/>
            </Route>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        {/* </Router>  */}

      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}