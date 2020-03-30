import React, { Component } from 'react';
import Header from './components/Header';
import FirstViz from './components/FirstViz';
import SecondViz from './components/SecondViz'
import ThirdViz from './components/ThirdViz';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <FirstViz resumeData={resumeData}/>
        <SecondViz resumeData={resumeData}/>
        <ThirdViz resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;