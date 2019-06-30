// Imports
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
const Breadcrumb = styled.div`
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-top: 0;
  border-right: 0;
  border-left: 0;

  i {
    color: #656565;
  }
`;

const Li = styled(Link)`
  margin: 7px;
  text-transform: capitalize;
  color: #227093;

  :hover {
    color: #34ace0;
  }
  :first-child {
    margin-left: 0;
  }
  :last-child {
    color: #656565;
    pointer-events: none;
    cursor: default;
  }
`;

// Funcs
const getPaths = () => {
  const paths = [];
  const path = document.location.pathname.split('/');

  path.map(p => (
    paths.push(`/${p}`)
  ));

  return paths;
};

const createLinks = routes => (
  routes.map(route => (
    getPaths().includes(route.route)
      ? (
        <React.Fragment key={route.route}>
          {route.route === '/' ? '' : <span>/</span>}
          <Li to={route.route}>
            {route.route === '/' ? 'Home' : route.route.split('/')}
          </Li>
        </React.Fragment>
      )
      : ''
  ))
);

// Main
const Main = ({ routes }) => (
  <Breadcrumb>
    {createLinks(routes)}
  </Breadcrumb>
);

// ProTypes
Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
