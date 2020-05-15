import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../datasets/USA Energy/Energy Census and Economic Data US 2010-2014.csv';

d3.csv(data).then(function(data) {
  console.log(data);
});

export default class ThirdViz extends Component {
  render() {
    return (
      <section id="usa_energy">
         <center>
        <div className="test-box">
          <h2>Energy Consumption for Different Resources in the United States</h2>
          <h4>USA Choropleth GeoMap</h4>
        </div>
        </center>
      </section>
    );
  }
}