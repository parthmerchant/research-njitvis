import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (

      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Energy Viz</a></li>
               <li><a className="smoothscroll" href="#about">Energy Sectors</a></li>
               <li><a className="smoothscroll" href="#un_energy">United Nations Energy Census</a></li>
               <li><a className="smoothscroll" href="#usa_energy">USA Energy</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <h1>Welcome to Energy Viz</h1>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>

      </React.Fragment>
    );
  }
}