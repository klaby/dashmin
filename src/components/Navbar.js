// Imports
import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled                       from 'styled-components';

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
  z-index: 101;
  box-shadow: 15px 3px 15px rgba(56, 56, 56, 0.2);
  transition: all .2s ease 0s;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `calc(${100}% - ${80}px)` : `calc(${100}% - ${250}px)`)};
    left: ${props => (props.view === 'min' ? `${80}px` : `${250}px`)};
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
    background: rgba(47, 53, 66, .05);
    transition: .3s;
    cursor: pointer;
  }
`;

// Fragments
const Button = ({ icon, event }) => (
  <Btn onClick={event}>{icon}</Btn>
);

// Main
export default function Main({ dropdown }) {

  const dashboard = useSelector(state => state);
  const dispatch  = useDispatch();

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
        user={dropdown.user}
        buttons={[
          {
            name: 'Settings',
            icon: <IoMdSettings size={18} />,
            route: '/settings',
            event: dropdown.buttons.settings
          },
          {
            name: 'Profile',
            icon: <IoMdPerson size={18} />,
            route: '/profile',
            event: dropdown.buttons.profile
          },
          {
            name: 'Logout',
            icon: <IoMdPower size={18} />,
            route: '/logout',
            event: dropdown.buttons.logout
          },
        ]}
      />
    </Navbar>
  );
};
