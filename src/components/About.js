import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div className="about-container">
            <hr></hr>
            <h5>Objectives:</h5>
            <p>1. Analyze energy consumption across different sectors annually between 1949-2019 to visualize energy consumption over time (Interactive Line Chart)<br></br>
2. Understand how different in the world consumes different energy-related commodities over time in order to understand how each individual nation utilizes different commodities as part of their energy sector (Small-multiple line charts)<br></br>
3. Visualize correlation between energy consumption and economic activity in the United States in order to gain insight on how economic activity may or may not be impacted by the United States Gross Domestic Product (Interactive Scatterplot)</p>
            <hr></hr>
        </div>
    );
  }
}