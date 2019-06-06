// React
import React from 'react';
import {Link} from 'react-router-dom';

// Style
import './index.scss';

// Dropdown Button
const DropButton = (props) => (
    <Link className="dropdown__buttons__btn" to={props.route}>
        <i className={props.icon}></i><span className="dropdown__buttons__btn-name"> {props.name} </span>
    </Link> 
);

export default DropButton;