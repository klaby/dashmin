// React
import React from 'react';
import {Link} from 'react-router-dom';

// SidebarButton
const SidebarButton = (props) => (
    <Link className="side-button" to={props.route}> 
        <i className={props.icon}></i><div className="button-name"> {props.name} </div> 
    </Link>
);

export default SidebarButton;