// Imports
import React  from 'react';
import styled from 'styled-components';

/**
 * Styles
 */
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-items: center;
    padding-top: 10px;

    /* 768px */
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* 1200px */
    @media only screen and (min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Card = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border-radius: 5px;
    background: ${props => props.backgroud};
    box-shadow: 5px 5px 15px rgba(56, 56, 56, 0.2);
    transition: .2s;
    user-select: none;

    display: flex;
    justify-content: center;

    animation: animatedCards;
    animation-duration: .2s;

    :hover {
        padding-left: 10px;
        transition: .2s;
        transition-delay: .2s;
    }

    @keyframes animatedCards {
        0%   {
            opacity: .1;
        }
        25%  {
            opacity: .3;
            }
        50%  {
            opacity: .5;
            }
        75%  {
            opacity: .8;
            }
        100% {
            opacity: 1;
        }
    }
`;

const CardIcon = styled.div`
    width: 110px;
    border-radius: 10px;
    padding: 0 10px 10px 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 25px 25px 0;

    display: flex;
    justify-content: center;
    align-items: left;

    flex-direction: column;
`;

const CardResult = styled.h2`
    font-family: 'Muli', sans-serif;
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    transition: .3s;
`;

const CardDescription = styled.h3`
    font-family: 'Muli', sans-serif;
    color: #fff;
    font-size: 1.2rem;
    transition: .3s;
`;

// Main
export default function Main({ cards }) {

  /**
   * Render
   */
  return (
    <Wrapper>
      {
        cards.map((card, index) => (
          <Card key={index} backgroud={card.backgroud}>
            <CardIcon>{card.icon}</CardIcon>
            
            <CardBody>
              <CardDescription>{card.description}</CardDescription>
              <CardResult>{ card.result }</CardResult>
            </CardBody>
          </Card>
        ))
      }
    </Wrapper>
  )
}
