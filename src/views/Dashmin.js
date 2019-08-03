// Imports
import React                        from 'react';

// Components
import { Sidebar, Navbar, Content } from 'components';

// Routes
import dashmin                       from 'routes';

// Main
export default function Main() {
  return (
    <>
      <Navbar 
        dropdown={dashmin.navbar.dropdown} 
      />
      <Sidebar 
        brand={dashmin.sidebar.brand} 
        buttons={dashmin.sidebar.buttons}
      />
      <Content 
        routes={dashmin.content}
      />
    </>
  )
}
