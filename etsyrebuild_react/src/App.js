import React, { Component } from 'react';
import './index.css';
import Header from './header'
import Footer from './footer'
import MainPage from './mainPage'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MainPage />
      <Footer />
      </div>
    )
  }
}

export default App;
