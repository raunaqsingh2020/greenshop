import React from 'react'
import styled from 'styled-components'

import { POPPINS_REGULAR } from '../styles/font'

const SectionWrapper = styled.div`
  margin: 0;
  padding: 0;
`

const OptionWrapper = styled.div`
  display: flex;
  align-items: center; 
  padding: 0 1.3rem 0 1.3rem;
`

const OptionText = styled.h1`
  font-size: 15px;
  color: #1B1B1B;
  margin-right: auto;
  // margin-left: 10px;
  ${POPPINS_REGULAR}
`

const Options = () => {
  return (
      <SectionWrapper>
          <OptionWrapper>
              <OptionText>Unrealistic Female Body Standards</OptionText>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label>
          </OptionWrapper>
      </SectionWrapper>
  );
};

export default Options;