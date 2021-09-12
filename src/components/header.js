import React from 'react'
import styled from 'styled-components'

import { POPPINS_MEDIUM, URBANIST_MEDIUM, URBANIST_REGULAR } from '../styles/font'

const HeaderWrapper = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  align-items: center; 
  margin: 0;
  padding: 0;
  background-color: #59E190;
  width: 100%;
  height: 52px;
  // box-shadow: 0px -1px 14px #888;
`

const HeaderText = styled.h1`
  color: white;
  padding: 0 1rem 0 1rem;
  font-size: 19px; 
  letter-spacing: 1px;
  ${URBANIST_MEDIUM}
`

const Header = () => {
  return (
      <HeaderWrapper>
          <HeaderText>greenshop</HeaderText>
      </HeaderWrapper>
  );
};

export default Header;