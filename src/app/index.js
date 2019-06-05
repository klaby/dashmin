// Imports
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// Store
import store from '../store';

// Styles
import './index.scss';

// Containers
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import Content from '../containers/Content';

// Main App
const App = () => (
  <div className="dashboard">
    <Provider store={store}>

      <BrowserRouter>

        <Sidebar />             {/* Sidebar */}
        <Navbar />              {/* Navabar */}
        <Content />             {/* Content */}
        
      </BrowserRouter>

    </Provider>
  </div>
);

export default App;