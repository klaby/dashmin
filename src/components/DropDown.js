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
  font-size: .72rem;
  margin-top: 3px;
`;
const Online = styled.span`
  position: absolute;
  height: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  width: ${props => (props.view === 'min' ? `${8}px` : `${12}px`)};
  bottom: ${props => (props.view === 'min' ? `${2}px` : `${5}px`)};
  right: 2px;
  border-radius: 10px;
  background: green;
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
  padding: 0 25px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .1s;
  cursor: pointer;

  :hover {
    background: rgba(56, 56, 56, 0.1);
    padding: 0 28px 0 26px;
    transition: .1s;
    transition: .1s;
  }

  span {
    font-weight: bold;
  }

  i {
    color: ${props => (props.iconColor ? props.iconColor : `#${656565}`)}!important;
  }
`;

// Funcs
const createButtons = (dashboard, buttons) => (
  <Buttons>
    {buttons.map(btn => (
      <Btn key={btn.id} iconColor={btn.icon.color}>
        <span>{btn.name}</span>
        <i className={btn.icon.type} color={btn.icon.color} />
      </Btn>
    ))}
  </Buttons>
);

// Main
const Main = () => {
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
      {createButtons(dashboard, [
        {
          id: 1,
          name: 'Settings',
          icon: {
            type: 'fas fa-cog',
          },
        },
        {
          id: 2,
          name: 'Profile',
          icon: {
            type: 'fas fa-user-alt',
          },
        },
        {
          id: 3,
          name: 'Logout',
          icon: {
            type: 'fas fa-sign-out-alt',
            color: '#e66767',
          },
        },
      ])}
    </DropDown>
  );
};

export default Main;
