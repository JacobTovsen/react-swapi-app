import React, { Component } from 'react';

class Planet extends Component {

  render() {
    return (
        <li key={this.props.planet.name}>{this.props.planet.name}</li>
    );
  }
}

export default Planet;