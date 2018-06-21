import React, { Component } from 'react';

class Planet extends Component {

  render() {
    return (
        <li key={this.props.people.name}>{this.props.people.name}</li>
    );
  }
}

export default Planet;