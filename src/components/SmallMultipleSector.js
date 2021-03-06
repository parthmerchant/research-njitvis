import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import data from '../data/energy_sector.json';

export default class SmallMultipleSector extends Component {

  render() {
    return (
      <section id="sm_energy">
        <center>
        <div className="test-box">
          <p className="small-multiple-grid-title">USA Energy Sectors (1949-2019)</p>
          <div class="grid-row">
            <div class="grid-column">
              <div class="grid-box">
               <center>
                <p className="small-multiple-title">Residential Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Residential Sector" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
               </center> 
              </div>
            </div>
            <div class="grid-column">
            <div class="grid-box">
                <p className="small-multiple-title">Commercial Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Commercial Sector" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
              </div>
            </div>
            <div class="grid-column">
            <div class="grid-box">
            <p className="small-multiple-title">Industrial Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Industrial Sector" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-column">
            <div class="grid-box">
                <p className="small-multiple-title">Transportation Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Transportation Sector" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
              </div>
            </div>
            <div class="grid-column">
            <div class="grid-box">
                <p className="small-multiple-title">Electric Power Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Electric Power Sector" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
              </div>
            </div>
            <div class="grid-column">
            <div class="grid-box">
                <p className="small-multiple-title">Total</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="Primary Energy Consumption Total" stroke="#14C43F" fill="#78E787" />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
        </center>
      </section>
    );
  }
}