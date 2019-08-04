// Imports
import React             from 'react';
import { useSelector }   from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled            from 'styled-components';

/**
 * Styles
 */
const Content = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  top: 50px;
  width: 100% + 20px;
  z-index: 99;
  transition: all .3s ease 0s;
  overflow: auto;
  padding: 20px 20px 20px 20px;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `calc(${100}% - ${80}px)` : `calc(${100}% - ${250}px)`)};
    left: ${props => (props.view === 'min' ? `${80}px` : `${250}px`)};
    padding: 20px 20px 20px 30px;
  }
`;

// Main
export default function Main({ routes }) {
  
  /**
   * States
   */
  const { content } = useSelector(state => state.dashboard);

  /**
   * Render
   */
  return (
    <Content view={content}>
      <Switch>
        {routes.map(route => (
          <Route key={route} exact path={route.route} component={route.page} />
        ))}
      </Switch>
    </Content>
  );
};
