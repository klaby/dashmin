// React
import React from 'react';
import {Link} from 'react-router-dom';

// Style
import './index.scss';

// Dropdown Button
const DropButton = (props) => (
    <Link className="drop-button" to={props.route}>
        <i className={props.icon}></i><span className="button-name"> {props.name} </span>
    </Link> 
);

export default DropButton;