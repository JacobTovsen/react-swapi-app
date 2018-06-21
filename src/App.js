import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      planetList: []
    }
  }

  // this is similar to Jquery onready
  // It is called by react when the component is loaded and ready to go
  componentDidMount() {
    console.log('App component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
    
  }

  getPlanets(url){
    axios.get(url)
      .then( (response) => {
        console.log('The response data:', response.data.results);
        this.setState({ planetList: [...this.state.planetList, ...response.data.results]})

        let nextUrl = response.data.next;
        if(nextUrl != null){
          this.getPlanets(nextUrl);   
        }
        else{
          console.log('All planets recieved');
        }    
      }).catch( (error) => {
        console.log('Error', error);
        
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Swapi Planets</h1>
        </header>
        <section>
          <ul>
          {
            this.state.planetList.map( planet => 
            <li key={planet.name}>{planet.name}</li>
            )
          }
          </ul>
        </section>
        
      </div>
    );
  }
}

export default App;
