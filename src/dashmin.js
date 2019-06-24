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
        // Brand
        brand={{
          max: 'D A S H M I N',
          min: 'dmin',
        }}

        // Buttons
        buttons={[
          {
            id: 1,
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            route: '/',
          },
          {
            id: 2,
            name: 'Users',
            icon: 'fas fa-users',
            route: '/users',
          },
          {
            id: 3,
            name: 'Financial',
            icon: 'fas fa-coins',
            route: '/financial',
          },
          {
            id: 4,
            name: 'Products',
            icon: 'fas fa-cart-plus',
            route: '/products',
          },
          {
            id: 5,
            name: 'Reports',
            icon: 'fas fa-chart-pie',
            route: '/reports',
          },
        ]}
      />

      {/* Content */}
      <Content routes={routes} />
    </BrowserRouter>
  </Provider>
);

export default Main;
