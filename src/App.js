import React from 'react'
import styled from "styled-components";

import logo from './logo.svg';
import './App.css';

import { Header, Options } from './components'

const Wrapper = styled.div`
  height: 300px;//min(400px, 80vh);
  width: 400px;min(500px, 80vw);
  background-color: white;
`

function App() {
  return (
    <Wrapper>
        <Header/>
        <Options/>
    </Wrapper>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
