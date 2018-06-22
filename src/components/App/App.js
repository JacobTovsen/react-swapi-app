import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList';
import PeopleList from '../PeopleList/PeopleList';
import Home from '../Home/Home';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  // this is similar to Jquery onready
  // It is called by react when the component is loaded and ready to go

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            {/* <div className="grid-container">
              <PlanetList planetList={this.state.planetList}/>
              <PeopleList peopleList={this.state.peopleList}/>   
            </div> */}
          
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/planetList'>Planets</Link></li>
              <li><Link to='/peopleList'>People</Link></li>
            </ul>

            <Route exact path='/' component={Home} />
            <Route path='/planetList' component={PlanetList} />
            <Route path='/peopleList' component={PeopleList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
