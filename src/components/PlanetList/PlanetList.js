import React, { Component } from 'react';
import Planet from '../Planet/Planet';
import axios from 'axios';

class PlanetList extends Component {

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
        <section className="grid-item">
            <h2>Known Planets:</h2>
            <ul>
            {
            this.state.planetList.map( planet => 
                <Planet planet={planet}/>

            )
            }
            </ul>
        </section>    
    );
  }
}

export default PlanetList;