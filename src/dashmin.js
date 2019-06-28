// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Reset CSS
import './reset.css';

// Store
import store from './store';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

// Main
const Main = ({ routes, brand }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Sidebar brand={brand} buttons={routes} />
      <Content routes={routes} />
    </BrowserRouter>
  </Provider>
);

// PropTypes
Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  brand: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Main;
