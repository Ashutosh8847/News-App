// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import { useState } from 'react';
// import Newscomponent from './components/Newscomponent';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";



import React, { Component } from 'react'

export class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })

  }
  render() {

    return (
      <div>
      <Main>
        <Navbar />   
        <LoadingBar
        height={3}
        color='#F11946 '
        progress={this.state.progress}></LoadingBar>
          <Routes>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={9} country={"in"} category={"Business"} />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={9} country={"in"} category={"Entertainment"} />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} key="General" pageSize={9} country={"in"} category={"General"} />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={9} country={"in"} category={"Health"} />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={9} country={"in"} category={"Science"} />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={9} country={"in"} category={"Sports"} />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={9} country={"in"} category={"Technology"} />} />
            <Route exact path="/Home" element={<News setProgress={this.setProgress} key="home" pageSize={9} country={"in"} category={"General"} />} />
            <Route exact path="/" element={<News setProgress={this.setProgress} key="all" pageSize={9} country={"in"} category={"General"} />} />


          </Routes>
        </Main>
      </div>
    );


  }
}

export default App




