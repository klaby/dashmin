// React
import React from 'react';

// Views
import Dashboard from '../views/Dashboard';
import Users from '../views/Users';
import Financial from '../views/Financial';
import Products from '../views/Products';
import Reports from '../views/Reports';

// Icons
import {
  IoMdOptions,
  IoMdPeople,
  IoMdCard,
  IoMdCart,
  IoMdAnalytics
} from 'react-icons/io'

// Routes
const Routes = {
  dashboard: '/',
  users: '/users',
  financial: '/financial',
  products: '/products',
  reports: '/reports',
};

// Dashmin
const Dashmin = {
  // Navbar
  navbar: {
    user: {
      avatar: 'https://imgur.com/NpICPSl.jpg',
      name: 'R o m u l l o',
      jobRole: 'Administrator',
    },
  },

  // Sidebar
  sidebar: {
    // Brand
    brand: {
      max: 'D A S H M I N',
      min: 'dmin' 
    },

    // Buttons
    buttons: [
      {
        name: 'Dashboard',
        icon: {
          component: <IoMdOptions />,
        },
        route: Routes.dashboard,
      },
      {
        name: 'Users',
        icon: {
          component: <IoMdPeople />,
        },
        route: Routes.users,
      },
      {
        name: 'Financial',
        icon: {
          component: <IoMdCard />,
        },
        route: Routes.financial,
      },
      {
        name: 'Products',
        icon: {
          component: <IoMdCart />,
        },
        route: Routes.products,
      },
      {
        name: 'Reports',
        icon: {
          component: <IoMdAnalytics />,
        },
        route: Routes.reports,
      }
    ]
  },

  // Content
  content: [
    {
      route: Routes.dashboard,
      page: Dashboard
    },
    {
      route: Routes.users,
      page: Users
    },
    {
      route: Routes.financial,
      page: Financial
    },
    {
      route: Routes.products,
      page: Products
    },
    {
      route: Routes.reports,
      page: Reports
    },
  ]
};

export default Dashmin;
