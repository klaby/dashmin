// Imports
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Reset CSS
import 'reset-css/reset.css';

// Store
import store from './store';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

// Main
const Main = ({ navbar, sidebar, content }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar user={navbar.user} />
      <Sidebar brand={sidebar.brand} buttons={sidebar.buttons} />
      <Content routes={content} />
    </BrowserRouter>
  </Provider>
);

// PropTypes
Main.propTypes = {
  navbar: PropTypes.shape({
    user: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  sidebar: PropTypes.shape({
    brand: PropTypes.object,
    buttons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
