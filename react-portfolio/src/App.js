//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import MyWork from './components/MyWork';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



// render Header, Navbar, 6 instances of MyWork, and Footer
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <MyWork />
      <MyWork />
      <MyWork />
      <MyWork />
      <MyWork />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;

