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
      <Sidebar routes={routes.main} brand={brand} />
      <Content routes={routes.main} />
    </BrowserRouter>
  </Provider>
);

// PropTypes
Main.propTypes = {
  brand: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }).isRequired,
  routes: PropTypes.shape({
    main: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default Main;
