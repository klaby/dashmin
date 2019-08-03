// Imports
import React                      from 'react';
import { Provider }               from 'react-redux';
import { Router, Route, Switch }  from "react-router-dom";
import history                    from 'helpers/history';

// Views
import Login                      from 'views/Login';
import Dashmin                    from 'views/Dashmin';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Routes
import PrivateRoute               from 'helpers/privateRoute';

// Store
import store                      from 'store';

// Main
export default function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Dashmin} />
        </Switch>
      </Router>
    </Provider>
  )
};
