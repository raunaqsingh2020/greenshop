import React from 'react'
import styled from 'styled-components'

import sus1 from '../styles/images/sus1.png'
import sus2 from '../styles/images/sus2.png'
import sus3 from '../styles/images/sus3.png'
import sus4 from '../styles/images/sus4.png'
import sus5 from '../styles/images/sus5.png'

import { POPPINS_REGULAR } from '../styles/font'

const SectionWrapper = styled.div`
  margin: 0;
  padding: 0;
`

const RatingWrapper = styled.div`
  // display: flex;
  align-items: center; 
  padding: 0 1.3rem 0 1.3rem;
`

const RatingHeaderText = styled.h1`
  font-size: 14px;
  color: #1B1B1B;
  margin-right: auto;
  // margin-left: 10px;
  ${POPPINS_REGULAR}
`

const SmallerRatingText = styled.h1`
  font-size: 16px;
  color: #1B1B1B;
  margin-right: auto;
  // margin-left: 10px;
  ${POPPINS_REGULAR}
`

const CompanyText = styled.h2`
  font-size: 16px;
  color: #1B1B1B;
  margin-right: auto;
  // margin-left: 10px;
  ${POPPINS_REGULAR}
`

const Rating = ({ brandName, rating, planet, people, animals }) => {
    return (
        <SectionWrapper>
            <RatingWrapper>
                <CompanyText>{brandName}</CompanyText>
                {rating !== 0 && (
                    <>
                        {rating == 1 &&
                            <img src={sus1} className="susbar" alt="Sustainability rating bar" />
                        }
                        {rating == 2 &&
                            <img src={sus2} className="susbar" alt="Sustainability rating bar" />
                        }
                        {rating == 3 &&
                            <img src={sus3} className="susbar" alt="Sustainability rating bar" />
                        }
                        {rating == 4 &&
                            <img src={sus4} className="susbar" alt="Sustainability rating bar" />
                        }
                        {rating == 5 &&
                            <img src={sus5} className="susbar" alt="Sustainability rating bar" />
                        }
                        <RatingHeaderText>{`Sustainability: ${rating}/5`}</RatingHeaderText>
                        <SmallerRatingText>{`Planet 🌍: ${planet}/5`}</SmallerRatingText>
                        <SmallerRatingText>{`People 🧍: ${people}/5`}</SmallerRatingText>
                        <SmallerRatingText>{`Animals 🐘: ${animals}/5`}</SmallerRatingText>
                    </>
                )}
            </RatingWrapper>
        </SectionWrapper>
    );
};

export default Rating;