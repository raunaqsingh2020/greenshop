import React from 'react'
import styled from 'styled-components'

import { POPPINS_MEDIUM } from '../styles/font'

const HeaderWrapper = styled.div`
  // position: fixed;
  top: 0;
  display: flex;
  align-items: center; 
  margin: 0;
  padding: 0;
  background-color: #B6BDFF;
  width: 100%;
  height: 52px;
  box-shadow: 0px -1px 14px #888;
`

const HeaderText = styled.h1`
  color: white;
  padding: 0 1rem 0 1rem;
  font-size: 17px; 
  letter-spacing: 1px;
  ${POPPINS_MEDIUM}
`

const Header = () => {
  return (
      <HeaderWrapper>
          <HeaderText>nsfm</HeaderText>
      </HeaderWrapper>
  );
};

export default Header;