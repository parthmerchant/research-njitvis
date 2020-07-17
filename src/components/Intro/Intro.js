import React from 'react';

import './Intro.css';

const Intro = () => {

    const resumeData = {
      "name":"github",
      "url":"https://github.com/parthmerchant/research-njitvis",
      "className":"fa fa-github"
    };

    return (
      <div>
        <div className="row">
        <div className="column">
          <h2>The Energy Viz Project</h2>
          <br></br>
          <img src={require('./viz.png')} alt='Intro-img' height="300" width="300"/>
        </div>
        <div className="column"><p>In the 21st century, energy consumption is at an all-time high, with individuals constantly using multiple electronic devices as well as living in homes filled with electronics. As people run their technological devices all day year long, energy is being used at a rate higher than it has been in previous years. In order to reduce energy consumption, as citizens, we must understand in what sector we’re consuming energy and how much we are using. Understanding energy usage on a micro and macro-level is essential to gaining insights on how we utilize energy and how we can potentially reduce our carbon footprint. Being able to understand how different states and countries consume energy is the goal of this project. Using existing visualization and user experience libraries and tools, we will be able to interactively and flexibly gain an understanding of how energy consumption has increased over the past century.</p></div>
      </div>
      <hr></hr>
      <p>Click below to check out my source code and experimental visualization Jupyter Notebook!</p>
      <a href={resumeData.url} className='github-button'>
        <img src={require('./github-icon.png')} alt='github-icon' width="80" />
      </a>
      </div>
      
    );
  };
  
  export default Intro;