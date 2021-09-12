/* global chrome */

import React, { useState, Component }from 'react'
import styled from "styled-components";

import { getDatabase, ref, onValue} from "firebase/database";

import logo from './logo.svg';
import './App.css';

import { Header, Rating, db } from './components'
import { POPPINS_MEDIUM, URBANIST_MEDIUM, URBANIST_REGULAR } from './styles/font'

const Wrapper = styled.div`
  height: 330px;//min(400px, 80vh);
  width: 400px;min(500px, 80vw);
  background-color: white;
  overflow-y:scroll;
`

const Spacer = styled.div`
  height: 60px;
`

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      brandText: "",
      url: "",
      rating: 0,
      people: 0,
      planet: 0,
      animals: 0
    };
  }

  componentDidMount() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const fullUrl = tabs[0].url;
      var domain = new URL(fullUrl);
      domain = domain.hostname.replace('www.','').replace('www2.','').replace('us.','').match(/^([^.]+)/);
      this.setState({url: String(domain[0])});

      try {
        const brandRef = ref(db, 'brands/' + this.state.url + '/');
        onValue(brandRef, (snapshot) => {
          const displayName = snapshot.child('/display_name/').val();
          const rating = snapshot.child('/rating/').val();
          const people = snapshot.child('/people/').val();
          const animals = snapshot.child('/animals/').val();
          const planet = snapshot.child('/planet/').val();
          this.setState({brandText: displayName ?? "Sorry, this site is not supported at the moment."})
          this.setState({rating: rating ?? 0})
          this.setState({people: people ?? 0})
          this.setState({animals: animals ?? 0})
          this.setState({planet: planet ?? 0})
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
          <Spacer/>
          <Rating 
            brandName={this.state.brandText}
            rating={this.state.rating}
            people={this.state.people}
            animals={this.state.animals}
            planet={this.state.planet}
          ></Rating>
      </Wrapper>
    );
  }
}

export default App;
