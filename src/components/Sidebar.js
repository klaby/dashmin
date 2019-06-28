// Imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
const Sidebar = styled.div`
  position: fixed;
  height: calc(100vh - 50px);
  width: ${props => (props.view === 'mobile' ? `${200}px` : `${0}px`)};
  top: 50px;
  background: #313B4F;
  z-index: 100;
  box-shadow: 10px 2px 15px rgba(56, 56, 56, 0.2);
  transition: all .1s ease 0s;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `${50}px` : `${200}px`)};
    height: 100vh;
    top: 0;
  }
`;

const Brand = styled.div`
  position: relative;
  height: 50px;
  width: ${props => (props.view === 'min' ? `${50}px` : `${200}px`)};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    color: rgba(241, 242, 246, .8);
    font-weight: bold;
  }
`;

const ListButtons = styled.div`
  position: relative;
  height: calc(100vh - 130px);
  background: rgba(245, 246, 250, 0.04);
  padding-top: 10px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  };

  @media only screen and (min-width: 576px) {
    height: calc(100vh - 80px);
  }
`;

const Btn = styled(Link)`
  position: relative;
  height: 50px;
  width: ${props => (props.view === 'min' ? `${50}px` : `${180}px`)};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding-left: ${props => (props.view === 'min' ? `${0}px` : `${20}px`)};
  display: flex;
  justify-content: ${props => (props.view === 'min' ? 'center' : 'space-between')};
  align-items: center;
  transition: .2s;
  background: ${props => (props.click === props.to ? `rgba(${245},${246},${250},${0.06})` : '')};
  color: rgba(241, 242, 246, .8);

  :hover {
    background: rgba(245, 246, 250, 0.03);
    color: rgba(241, 242, 246, .8);
    padding: ${props => (props.view === 'min' ? `${0}px ${0}px ${0}px ${7}px` : `${0}px ${5}px ${0}px ${22}px`)};
    transition: .2s;
    cursor: pointer !important;
  }

  span {
    font-weight: bold;
  }
`;

const Icon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  font-size: ${props => (props.size ? props.size : `${1}rem`)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  position: relative;
  height: 30px;
  width: ${props => (props.view === 'min' ? `${100}%` : `${200}px`)};
  background: rgba(245, 246, 250, 0.04);
  color: rgba(241, 242, 246, .8);
  display: flex;
  justify-content: center;

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .6rem;
    color: #fff;
    font-weight: bold;
  }
`;

// Main
const Main = ({ brand, routes }) => {
  const { sidebar } = useSelector(state => state.dashboard);
  const [click, setClick] = useState('');

  const createButtons = () => (
    <ListButtons view={sidebar}>
      {routes.map(btn => (
        <Btn
          key={Math.random()}
          view={sidebar}
          to={btn.route}
          onClick={() => setClick(btn.route)}
          click={click}
        >
          {sidebar === 'min' ? '' : <span>{btn.button.name}</span>}
          {
            btn.button.icon.class
            ? <Icon size={btn.button.icon.size}><i className={btn.button.icon.class} /></Icon>
            : <Icon size={btn.button.icon.size}>{btn.button.icon.component}</Icon>
          }
        </Btn>
      ))}
    </ListButtons>
  );

  return (
    <Sidebar view={sidebar}>
      {/* Brand */}
      <Brand view={sidebar}>
        <span>{sidebar === 'min' ? brand.min : brand.max}</span>
      </Brand>

      {/* Buttons */}
      {createButtons(sidebar, routes)}

      {/* Footer */}
      <Footer view={sidebar}>
        <span>{sidebar === 'min' ? brand.min : brand.max}</span>
      </Footer>
    </Sidebar>
  );
};

export default Main;
