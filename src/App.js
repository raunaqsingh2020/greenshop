import React from 'react'
import styled from "styled-components";

import logo from './logo.svg';
import './App.css';

import { Header, Options, Rating } from './components'

const Wrapper = styled.div`
  height: 300px;//min(400px, 80vh);
  width: 400px;min(500px, 80vw);
  background-color: white;
`

function App() {
  return (
    <Wrapper>
        <Header/>
        <Rating/>
    </Wrapper>
  );
}

export default App;
