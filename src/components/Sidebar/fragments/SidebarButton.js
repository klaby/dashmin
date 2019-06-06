// React
import React from 'react';
import {Link} from 'react-router-dom';

// SidebarButton
const SidebarButton = (props) => (
    <Link className="sidebar__buttons__btn" to={props.route}> 
        <i className={props.icon}></i><div className="sidebar__buttons__btn-name"> {props.name} </div> 
    </Link>
);

export default SidebarButton;