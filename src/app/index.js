// Imports
import React from 'react';
import {Provider} from 'react-redux';

// Store
import store from '../store';

// Styles
import './index.scss';

// Containers
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import Content from '../components/Content';

// Main App
const App = () => (
  <div className="dashboard">
    <Provider store={store}>

      <Sidebar />             {/* Sidebar */}
      <Navbar />              {/* Navabar */}
      <Content />             {/* Content */}

    </Provider>
  </div>
);

export default App;