// Imports
import React from 'react';
import Breadcrumb from 'react-minimal-breadcrumb';
import PropTypes from 'prop-types';

// Main
const Main = ({ routes }) => <Breadcrumb routes={routes} />;

// ProTypes
Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
