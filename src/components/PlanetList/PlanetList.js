import React, { Component } from 'react';
import Planet from '../Planet/Planet';

class PlanetList extends Component {

  render() {
    return (
        <section className="grid-item">
            <h2>Known Planets:</h2>
            <ul>
            {
            this.props.planetList.map( planet => 
                <Planet planet={planet}/>
            // <li key={planet.name}>{planet.name}</li>
            )
            }
            </ul>
        </section>    
    );
  }
}

export default PlanetList;