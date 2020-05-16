import React, { Component } from 'react';
import Header from './components/Header';
import FirstViz from './components/FirstViz';
import SecondViz from './components/SecondViz'
import ThirdViz from './components/ThirdViz';
import LabelDiv from './components/LabelDiv';
import Footer from './components/Footer';
import resumeData from './resumeData';
import FourthViz from './components/FourthViz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FirstViz />
        <SecondViz />
        <ThirdViz />
        <FourthViz />
        <LabelDiv />
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;