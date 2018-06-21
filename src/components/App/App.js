import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList';
import PeopleList from '../PeopleList/PeopleList';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      planetList: [],
      peopleList: []
    }
  }

  // this is similar to Jquery onready
  // It is called by react when the component is loaded and ready to go
  componentDidMount() {
    console.log('App component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
    this.getPeople('https://swapi.co/api/people/?format=json');
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

  //async function
  async getPeople(url){
    let nextUrl = url;
    while (nextUrl != null){
      await axios.get(nextUrl) //must be inside of async function for await
        .then( (response) => {
          this.setState (
            {
              peopleList: [...this.state.peopleList, ...response.data.results]
            }
          );
          nextUrl = response.data.next
        }).catch( (error) => {
          console.log('Error in people');
          nextUrl = null;
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="grid-container">
          <PlanetList planetList={this.state.planetList}/>
          <PeopleList peopleList={this.state.peopleList}/>   
        </div>
        

        <br/>
           
      </div>
    );
  }
}

export default App;
