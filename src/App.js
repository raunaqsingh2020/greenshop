/* global chrome */

import React, { useState, Component }from 'react'
import styled from "styled-components";

import { getDatabase, ref, onValue} from "firebase/database";

import logo from './logo.svg';
import './App.css';

import { Header, Options, db } from './components'
import { POPPINS_MEDIUM, URBANIST_MEDIUM, URBANIST_REGULAR } from './styles/font'

const Wrapper = styled.div`
  height: 300px;//min(400px, 80vh);
  width: 400px;min(500px, 80vw);
  background-color: white;
`

const HeaderText = styled.h1`
  color: black;
  padding: 0 1rem 0 1rem;
  font-size: 19px; 
  letter-spacing: 1px;
  ${URBANIST_MEDIUM}
`

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      brandText: "Sorry, this site is not supported at the moment.",
      url: "..."
    };
  }

  componentDidMount() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const fullUrl = tabs[0].url;
      var domain = new URL(fullUrl);
      domain = domain.hostname.replace('www.','').replace('www2.','').match(/^([^.]+)/);
      this.setState({url: String(domain[0])});

      try {
        const textRef = ref(db, 'brands/' + this.state.url + '/display_name/');
        onValue(textRef, (snapshot) => {
          const data = snapshot.val();
          console.log("FOUND SITE: " + String(data))
          if (data !== null) {
            this.setState({brandText: String(data)});
          }
        });
      } catch {
          console.log("INVALID SITE!")
      }
    }.bind(this));  

  }

  render() {
    return (
      <Wrapper>
          <Header/>
          <HeaderText>{this.state.brandText}</HeaderText>
      </Wrapper>
    );
  }
}

export default App;
