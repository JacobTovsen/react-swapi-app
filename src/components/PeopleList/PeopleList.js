import React, { Component } from 'react';
import People from '../People/People';

class Planet extends Component {

  render() {
    return (
        <section className="grid-item">
            <h2>Characters:</h2>
            <ul>
            {
            this.props.peopleList.map( people => 
            <People people={people}/>
            )
            }
            </ul>
      </section>
    );
  }
}

export default Planet;