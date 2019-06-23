// Imports
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import DropDown from './DropDown';

// Styles
const Navbar = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background: #f1f2f6;
  z-index: 101;
  box-shadow: -4px 5px 10px rgba(56, 56, 56, 0.2);
  transition: .1s;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `calc(${100}% - ${50}px)` : `calc(${100}% - ${200}px)`)};
    left: ${props => (props.view === 'min' ? `${50}px` : `${200}px`)};
  }
`;

const Buttons = styled.div`
  position: relative;
  height: 50px;
`;

const Btn = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;

  i {
    color: rgba(56, 56, 56, 0.7);
  }

  :hover {
    background: rgba(47, 53, 66, .1);
    transition: .3s;
    cursor: pointer;
  }
`;

// Fragments
const Button = ({ icon, event }) => (
  <Btn onClick={event}>
    <i className={icon} />
  </Btn>
);

// Main
const Main = () => {
  const { dashboard, user } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSidebar = () => (
    dispatch({
      type: 'TOGGLE_SIDEBAR',
      dashboard,
    })
  );

  return (
    <Navbar view={dashboard.navbar}>
      {/* Left */}
      <Buttons>
        <Button icon="fas fa-bars" event={handleSidebar} />
      </Buttons>

      {/* Right */}
      <DropDown user={user} />
    </Navbar>
  );
};

// PropTypes
Button.propTypes = {
  icon: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Main;
