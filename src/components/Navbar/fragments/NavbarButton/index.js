// React
import React from 'react';

// Style
import './index.scss';

// Navbar Button
const NavbarButton = (props) => (
    <div className="btn" onClick={props.event}>
        <i className={props.icon}></i>
        <span className={props.class}></span>
    </div>
);

export default NavbarButton;