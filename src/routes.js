// Imports
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Pages
import pages from './pages';

// Routes
const Routes = () => (
    <div>

        <Switch>
            <Route exact path='/' component={pages.Dashboard} />
            <Route path='/users' component={pages.Users} />
            <Route path='/financial' component={pages.Financial} />
            <Route path='/products' component={pages.Products} />
            <Route path='/reports' component={pages.Reports} />
        </Switch>

    </div>
);

export default Routes;