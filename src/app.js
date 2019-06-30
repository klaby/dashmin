import React from 'react';
import { Dashmin } from 'dashmin';
import routes from './routes';

const App = () => (
  <Dashmin 
    navbar={routes.navbar}
    sidebar={routes.sidebar}
    content={routes.content}
  />
);

export default App;