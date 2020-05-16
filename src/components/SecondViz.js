import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import * as d3 from 'd3';
// import data from '../datasets/United Nations Energy Census/all_energy_statistics.csv';

const data = [
  {"Year":"2000","Electricity - total nuclear production":"797718","Heat - Net production":"323778","Gas Oil/ Diesel Oil - Production":"180877","Electricity - total geothermal production":"14621","Electricity - total hydro production":"279986","Liquefied petroleum gas (LPG) - Production":"51620"},
  {"Year":"2001","Electricity - total nuclear production":"792604","Heat - Net production":"303593","Gas Oil/ Diesel Oil - Production":"185755","Electricity - total geothermal production":"14246","Electricity - total hydro production":"214728","Liquefied petroleum gas (LPG) - Production":"49090"},
  {"Year":"2002","Electricity - total nuclear production":"804519","Heat - Net production":"296812","Gas Oil/ Diesel Oil - Production":"180511","Electricity - total geothermal production":"14939","Electricity - total hydro production":"291755","Liquefied petroleum gas (LPG) - Production":"46726"},
  {"Year":"2003","Electricity - total nuclear production":"787818","Heat - Net production":"293414","Gas Oil/ Diesel Oil - Production":"188137","Electricity - total geothermal production":"14870","Electricity - total hydro production":"305724","Liquefied petroleum gas (LPG) - Production":"46719"},
  {"Year":"2004","Electricity - total nuclear production":"813339","Heat - Net production":"188881","Gas Oil/ Diesel Oil - Production":"194143","Electricity - total geothermal production":"15487","Electricity - total hydro production":"297894","Liquefied petroleum gas (LPG) - Production":"48076"},
  {"Year":"2005","Electricity - total nuclear production":"810726","Heat - Net production":"199818","Gas Oil/ Diesel Oil - Production":"200203","Electricity - total geothermal production":"16778","Electricity - total hydro production":"297926","Liquefied petroleum gas (LPG) - Production":"46097"},
  {"Year":"2006","Electricity - total nuclear production":"816195","Heat - Net production":"433406","Gas Oil/ Diesel Oil - Production":"204267","Electricity - total geothermal production":"16581","Electricity - total hydro production":"317689","Liquefied petroleum gas (LPG) - Production":"43365"},
  {"Year":"2007","Electricity - total nuclear production":"836634","Heat - Net production":"441356","Gas Oil/ Diesel Oil - Production":"208522","Electricity - total geothermal production":"16798","Electricity - total hydro production":"275545","Liquefied petroleum gas (LPG) - Production":"42490"},
  {"Year":"2008","Electricity - total nuclear production":"837804","Heat - Net production":"426934","Gas Oil/ Diesel Oil - Production":"216717","Electricity - total geothermal production":"16873","Electricity - total hydro production":"281995","Liquefied petroleum gas (LPG) - Production":"41034"},
  {"Year":"2009","Electricity - total nuclear production":"830210","Heat - Net production":"416418","Gas Oil/ Diesel Oil - Production":"201505","Electricity - total geothermal production":"17046","Electricity - total hydro production":"298410","Liquefied petroleum gas (LPG) - Production":"38668"},
  {"Year":"2010","Electricity - total nuclear production":"838931","Heat - Net production":"406834","Gas Oil/ Diesel Oil - Production":"210529","Electricity - total geothermal production":"17577","Electricity - total hydro production":"286333","Liquefied petroleum gas (LPG) - Production":"40016"},
  {"Year":"2011","Electricity - total nuclear production":"821405","Heat - Net production":"407109","Gas Oil/ Diesel Oil - Production":"222846","Electricity - total geothermal production":"17892","Electricity - total hydro production":"344679","Liquefied petroleum gas (LPG) - Production":"41441"},
  {"Year":"2012","Electricity - total nuclear production":"801129","Heat - Net production":"400639","Gas Oil/ Diesel Oil - Production":"226806","Electricity - total geothermal production":"18135","Electricity - total hydro production":"298287","Liquefied petroleum gas (LPG) - Production":"33970"},
  {"Year":"2013","Electricity - total nuclear production":"822004","Heat - Net production":"359699","Gas Oil/ Diesel Oil - Production":"234109","Electricity - total geothermal production":"18422","Electricity - total hydro production":"290113","Liquefied petroleum gas (LPG) - Production":"41130"},
  {"Year":"2014","Electricity - total nuclear production":"830584","Heat - Net production":"342886","Gas Oil/ Diesel Oil - Production":"243731","Electricity - total geothermal production":"18710","Electricity - total hydro production":"281527","Liquefied petroleum gas (LPG) - Production":"40691"}
];

export default class SecondViz extends Component {
  render() {
    return (
      <section id="un_energy">
        <center>
        <div className="test-box">
          <h2>Energy Consumption across the World for Different Commodities</h2>
          <div class="grid-row">
            <div class="grid-column">
            <h4>Total Nuclear Production</h4>
              <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Electricity - total nuclear production" stroke="#D82216" fill="#D82216" />
              </AreaChart>
            </div>
            <div class="grid-column">
            <h4>Net Heat Production</h4>
            <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Heat - Net production" stroke="#F36919" fill="#F36919" />
              </AreaChart>
            </div>
            <div class="grid-column">
            <h4>Total Gas/Diesel Oil Production</h4>
              <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Gas Oil/ Diesel Oil - Production" stroke="#F3E219" fill="#F3E219" />
              </AreaChart>
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-column">
            <h4>Total Geothermal Production</h4>
            <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Electricity - total geothermal production" stroke="#62F319" fill="#62F319" />
              </AreaChart>
            </div>
            <div class="grid-column">
            <h4>Total Hydro Production</h4>
              <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Electricity - total hydro production" stroke="#199AF3" fill="#199AF3" />
              </AreaChart>
            </div>
            <div class="grid-column">
            <h4>Total Liquefied Petroleum Gas Production</h4>
              <AreaChart
                width={360}
                height={200}
                data={data}
                margin={{
                  top: 10, right: 30, left: 30, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Area type="monotoneX" dataKey="Liquefied petroleum gas (LPG) - Production" stroke="#9A19F3" fill="#9A19F3" />
              </AreaChart>
            </div>
          </div>
        </div>
        </center>
      </section>
    );
  }
}