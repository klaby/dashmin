// React
import React       from 'react';

// API
import { logout }  from 'services/auth';

// Views
import Dashboard   from 'views/Dashboard';
import Clients     from 'views/Clients';
import Financial   from 'views/Financial';
import Products    from 'views/Products';
import Reports     from 'views/Reports';

// Icons
import {
  IoMdOptions,
  IoMdPeople,
  IoMdStats,
  IoMdCart,
  IoMdPulse
} from 'react-icons/io'

// Routes
const Routes = {
  dashboard: '/',
  clients: '/clients',
  financial: '/financial',
  products: '/products',
  reports: '/reports',
};

// Dashmin
const Dashmin = {

  // Navbar
  navbar: {

    // Dropdown
    dropdown: {

      // User Profile
      user: {
        avatar: 'https://i.imgur.com/NpICPSl.jpg',
        name: 'R o m u l l o',
        jobRole: 'Administrator',
      },

      // Buttons events
      buttons: {
        settings: {
          name: 'Settings',
          event: () => {}
        },
        profile: {
          name: 'Profile',
          event: () => {}
        },
        logout: {
          name: 'Logout',
          event: () => {
            logout();
            document.location.reload(); 
          }
        }
      }
    }
  },

  // Sidebar
  sidebar: {

    // brand
    brand: {
      max: 'Dashmin',
      min: 'dmin'
    },

    // buttons
    buttons: [
      {
        name: 'Dashboard',
        icon: <IoMdOptions />,
        route: Routes.dashboard,
      },
      {
        name: 'Clients',
        icon: <IoMdPeople />,
        route: Routes.clients,
      },
      {
        name: 'Financial',
        icon: <IoMdStats />,
        route: Routes.financial,
      },
      {
        name: 'Products',
        icon: <IoMdCart />,
        route: Routes.products,
      },
      {
        name: 'Reports',
        icon: <IoMdPulse />,
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
      route: Routes.clients,
      page: Clients
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
