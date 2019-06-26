// Imports
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Store
import store from './store';

// Routes
import routes from './routes';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

// Main
const Main = () => (
  <Provider store={store}>
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar
        brand={{ max: 'D A S H M I N', min: 'dmin' }}
        buttons={routes}
      />

      {/* Content */}
      <Content routes={routes} />

    </BrowserRouter>
  </Provider>
);

export default Main;
