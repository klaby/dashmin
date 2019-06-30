// Imports
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Icons
import {
  IoMdMenu,
  IoMdSettings,
  IoMdPerson,
  IoMdPower,
} from 'react-icons/io';

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
  transition: all .2s ease 0s;

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
  font-size: 1.3rem;
  color: rgba(56, 56, 56, 0.7);

  :hover {
    background: rgba(47, 53, 66, .1);
    transition: .3s;
    cursor: pointer;
  }
`;

// Fragments
const Button = ({ icon, event }) => (
  <Btn onClick={event}>{icon}</Btn>
);

// Main
const Main = ({ user }) => {
  const dashboard = useSelector(state => state);
  const dispatch = useDispatch();

  // Handle sidebar
  const handleSidebar = () => (
    dispatch({
      type: 'TOGGLE_SIDEBAR',
      dashboard,
    })
  );

  // Render
  return (
    <Navbar view={dashboard.navbar}>
      {/* Left */}
      <Buttons>
        <Button icon={<IoMdMenu />} event={handleSidebar} />
      </Buttons>

      {/* Right */}
      <DropDown
        user={user}
        buttons={[
          {
            name: 'Settings',
            icon: <IoMdSettings />,
            route: '/settings',
          },
          {
            name: 'Profile',
            icon: <IoMdPerson />,
            route: '/profile',
          },
          {
            name: 'Logout',
            icon: <IoMdPower />,
            route: '/logout',
            color: '#656565',
          },
        ]}
      />
    </Navbar>
  );
};

// PropTypes
Button.propTypes = {
  event: PropTypes.func.isRequired,
  icon: PropTypes.objectOf(PropTypes.object).isRequired,
};

Main.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Main;
