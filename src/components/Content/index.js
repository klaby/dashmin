// Imports
import React from 'react';
import {connect} from 'react-redux';

// Styles
import './index.scss';

// Content
const Content = ({classes}) => (
    <div className={classes.content}>

    </div>
);

export default connect(state => ({
    classes: state.dashboard.classes
}))(Content);