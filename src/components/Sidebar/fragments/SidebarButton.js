// React
import React from 'react';

// SidebarButton
const SidebarButton = (props) => (
    <div className="side-button">
        <i className={props.icon}></i><a className="button-name" href=""> {props.name} </a>
    </div>
);

export default SidebarButton;