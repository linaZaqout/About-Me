import React from 'react';
import WorkOut from './components/workout/WorkOut';
import './App.css';
import WorkOutObese from './components/workout/WorkOutObese';
import WorkOutNormal from './components/workout/WorkOutNormal';
import WorkOutUnder from './components/workout/WorkOutUnder';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";  

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path ="/" component={WorkOut}/>
          <Route exact path ="/WorkOutObese" component ={WorkOutObese}/>
          <Route exact path ="/WorkOutNormal" component={WorkOutNormal}/>
          <Route exact path ="/WorkOutUnder" component={WorkOutUnder}/>

        </Switch>
      </Router>


      </div>

  );
}


export default App;
