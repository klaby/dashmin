// Imports
import React from 'react';
import {connect} from 'react-redux';

// Styles
import './index.scss';

// Components
import Form from '../Form';

// Content
const Content = ({classes}) => (
    <div className={classes.content}>
        <Form />
    </div>
);

export default connect(state => ({
    classes: state.dashboard.classes
}))(Content);