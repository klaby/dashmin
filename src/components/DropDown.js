// Imports
import React, { useEffect, useState, useRef } from 'react';
import { Link }                               from 'react-router-dom';
import styled                                 from 'styled-components';

/**
 * Styles
 */
const DropDown = styled.div`
  position: absolute;
  height: 270px;
  width: 190px;
  background: #fff;
  top: 0;
  right: 0;
  color: #606c88;
  box-shadow: -4px 5px 10px rgba(56, 56, 56, 0.2);
`;

const DropDownMin = styled(DropDown)`
  height: 35px;
  width: 35px;
  right: 15px;
  top: 7.5px;
  box-shadow: none;
`;

const Profile = styled.div`
  position: relative;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.div`
  position: relative;
  height: ${props => (props.view === 'min' ? `${35}px` : `${50}px`)};

  img {
    height: ${props => (props.view === 'min' ? `${35}px` : `${50}px`)};
    border-radius: 50px;
  }

  :hover {
    cursor: pointer;
  }
`;

const Name = styled.span`
  font-family: 'Muli', sans-serif;
  font-size: .92rem;
  font-weight: bold;
  margin-top: 5px;
`;

const JobRole = styled.span`
  font-family: 'Muli', sans-serif;
  font-size: .73rem;
  margin-top: -4px;
`;
const Online = styled.span`
  position: absolute;
  height: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  width: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  bottom: 1px;
  right: 2px;
  border-radius: 10px;
  background: linear-gradient(to right, #02aab0, #00cdac);
`;

const Buttons = styled.div`
  position: relative;
  height: 160px;
  background: rgba(245, 246, 250, 0.04);
  padding-top: 10px;
`;

const Btn = styled(Link)`
  position: relative;
  height: 45px;
  color: #606c88;
  font-family: 'Muli', sans-serif;
  font-weight: bold;
  font-size: 13px;
  padding: 0 5px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .1s;
  cursor: pointer;

  :hover {
    background: rgba(47, 53, 66, .05);
    color: #606c88;
    transition: .2s;
    text-decoration: none;
  }
`;

const Icon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Main
export default function Main ({ user, buttons }) {

  /**
   * States
   */
  const [open, setOpen] = useState(false);
  const node            = useRef();

  /**
   * Functions
   */

  // HandleClick
  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;
    setOpen(false);
  };

  // useEffect
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  // Fragments
  const createButtons = () => (
    buttons.map(btn => (
      <Btn key={Math.random()} to={btn.route} onClick={btn.event}>
        <span>{btn.name}</span>
        <Icon>{btn.icon}</Icon>
      </Btn>
    ))
  );

  /**
   * Render
   */
  if (!open) {
    return (
      <DropDownMin ref={node}>
        <Avatar view="min" onClick={() => setOpen(!open)}>
          <img src={user.avatar} alt="Profile user" />
          <Online view="min" />
        </Avatar>
      </DropDownMin>
    );
  }

  return (
    <DropDown ref={node}>
      {/* Profile */}
      <Profile>
        <Avatar onClick={() => setOpen(!open)}>
          <img src={user.avatar} alt="Profile user" />
          <Online />
        </Avatar>
        <Name>{user.name}</Name>
        <JobRole>{user.jobRole}</JobRole>
      </Profile>

      {/* Buttons */}
      <Buttons>
       {createButtons( buttons)}
      </Buttons>
    </DropDown>
  );
};
