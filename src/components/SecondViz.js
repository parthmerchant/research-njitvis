import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../datasets/United Nations Energy Census/all_energy_statistics.csv';

d3.csv(data).then(function(data) {
  console.log(data);
});

export default class SecondViz extends Component {
  render() {
    return (
      <section id="un_energy">
        <center>
        <div className="test-box">
          <h2>Energy Consumption across the World for Different Commodities</h2>
          <h4>Small Multiple Line Charts</h4>  
        </div>
        </center>
      </section>
    );
  }
}