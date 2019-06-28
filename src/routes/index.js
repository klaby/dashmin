// Pages
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Financial from '../pages/Financial';
import Products from '../pages/Products';
import Reports from '../pages/Reports';

// Routes
const Routes = [
  {
    route: '/',
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    page: Dashboard,
  },
  {
    route: '/users',
    name: 'Users',
    icon: 'fas fa-users',
    page: Users,
  },
  {
    route: '/financial',
    name: 'Financial',
    icon: 'fas fa-coins',
    page: Financial,
  },
  {
    route: '/products',
    name: 'Products',
    icon: 'fas fa-cart-plus',
    page: Products,
  },
  {
    route: '/reports',
    name: 'Reports',
    icon: 'fas fa-chart-pie',
    page: Reports,
  },
];

export default Routes;