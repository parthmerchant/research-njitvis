import React, { Component } from 'react';
import Header from './components/Header';
import FirstViz from './components/FirstViz';
import SmallMultipleSector from './components/SmallMultipleSector';
import SecondViz from './components/SecondViz'
import ThirdViz from './components/ThirdViz';
import LabelDiv from './components/LabelDiv';
import Footer from './components/Footer';
import resumeData from './resumeData';
import FourthViz from './components/FourthViz';
import SmallMultipleScatter from './components/SmallMultipleScatter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FirstViz />
        <SmallMultipleSector />
        <SecondViz />
        <FourthViz />
        <SmallMultipleScatter />
        <LabelDiv />
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;