// Imports
import React from 'react';

// Styles
import './index.scss';

// Pages
import Routes from '../../routes';

// Content
const Content = ({classes}) => (
    <div className={classes.content}> 
        <Routes />             {/* Routes */} 
    </div>
);

export default Content;