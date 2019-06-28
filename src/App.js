// Imports
import React from 'react';
import Dashmin from 'dashmin'

// Routes
import routes from './routes';

const App = () => (
  <Dashmin brand={{ max: 'D A S H M I N', min: 'dmin' }} routes={routes} />
);

export default App;
