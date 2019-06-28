// Imports
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Styles
const DropDown = styled.div`
  position: absolute;
  height: 270px;
  width: 190px;
  background: #f1f2f6;
  top: 0;
  right: 0;
  color: #656565;
  box-shadow: -4px 5px 10px rgba(56, 56, 56, 0.2);
`;

const DropDownMin = styled(DropDown)`
  height: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: .9rem;
  font-weight: bold;
  margin-top: 5px;
`;

const Function = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: .75rem;
  margin-top: 3px;
`;
const Online = styled.span`
  position: absolute;
  height: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  width: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  bottom: 1px;
  right: 2px;
  border-radius: 10px;
  background: #20bf6b;
`;

const Buttons = styled.div`
  position: relative;
  height: 160px;
  background: rgba(245, 246, 250, 0.04);
  padding-top: 10px;
`;

const Btn = styled.div`
  position: relative;
  height: 45px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 0 5px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .1s;
  cursor: pointer;

  :hover {
    background: rgba(56, 56, 56, 0.1);
    padding: 0 8px 0 27px;
    transition: .2s;
  }

  span {
    font-weight: bold;
  }

  i {
    color: ${props => (props.iconColor ? props.iconColor : `#${656565}`)}!important;
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

// Funcs
const createButtons = (dashboard, buttons) => (
  <Buttons>
    {buttons.map(btn => (
      <Btn key={Math.random()} iconColor={btn.icon.color}>
        <span>{btn.name}</span>
        <Icon>{btn.icon}</Icon>
      </Btn>
    ))}
  </Buttons>
);

// Main
const Main = ({ buttons }) => {
  const { user, dashboard } = useSelector(state => state);
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  if (!open) {
    return (
      <DropDownMin ref={node}>
        <Avatar view="min" onClick={() => setOpen(!open)}>
          <img src={user.user.avatar} alt="" />
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
          <img src={user.user.avatar} alt="" />
          <Online />
        </Avatar>
        <Name>{user.user.name}</Name>
        <Function>{user.user.function}</Function>
      </Profile>

      {/* Buttons */}
      {createButtons(dashboard, buttons)}
    </DropDown>
  );
};

export default Main;
