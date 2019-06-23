// Imports
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Styles
const Content = styled.div`
  position: relative;
  height: calc(100vh - 90px);
  top: 90px;
  width: 100%;
  background: rgba(241, 242, 246, .2);
  z-index: 99;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `calc(${100}% - ${50}px)` : `calc(${100}% - ${200}px)`)};
    left: ${props => (props.view === 'min' ? `${50}px` : `${200}px`)};
    padding: 20px;
  }
`;
// Main
const Main = ({ routes }) => {
  const { dashboard } = useSelector(state => state);

  return (
    <Content view={dashboard.content}>
      <Switch>
        {routes.map(route => (
          route.route === '/'
            ? <Route key={route} exact path={route.route} component={route.page} />
            : <Route key={route} path={route.route} component={route.page} />
        ))}
      </Switch>
    </Content>
  );
};

// PropTypes
Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
