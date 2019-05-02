import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navigation/Navbar';
import Opponents from './components/splash/Opponents';
import Levels from './components/levels/Levels';
import Fight from './components/game/Fight';

function App() {
  return (
    <Router>
      <div className="App backs">
        <NavBar />
        <Route exact path='/' component={Opponents} />  
        <Route exact path='/levels' component={Levels} />  
        <Route exact path='/fight' component={Fight} />  
      </div>
    </Router>
  );
}

export default App;
