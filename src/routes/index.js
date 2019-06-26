// Pages
import pages from '../pages';

// Routes
const Routes = [
  {
    route: '/',
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    page: pages.Dashboard,
  },
  {
    route: '/users',
    name: 'Users',
    icon: 'fas fa-users',
    page: pages.Users,
  },
  {
    route: '/financial',
    name: 'Financial',
    icon: 'fas fa-coins',
    page: pages.Financial,
  },
  {
    route: '/products',
    name: 'Products',
    icon: 'fas fa-cart-plus',
    page: pages.Products,
  },
  {
    route: '/reports',
    name: 'Reports',
    icon: 'fas fa-chart-pie',
    page: pages.Reports,
  },
];

export default Routes;
