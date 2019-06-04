// Imports
import React from 'react';

// Styles
import './index.scss'

// Components
import SidebarButton from './fragments/SidebarButton'

// Sidebar
const Sidebar = ( {classes, user} ) => (
    <div className={classes.sidebar}>
        {/* Brand */}
        <div className="sidebar-brand">
            <h1>
                <a className="link-brand lg" href=""><strong>DASH</strong>min</a>
                <a className="link-brand xs" href=""><strong>d</strong>min</a>
            </h1>
        </div>

        {/* Profile */}
        <div className="sidebar-profile">
            <div className="image-status">
                <img className="img-profile" src={user.avatar} alt=""></img>
                <span className="is-online"></span>
            </div>
            <span className="user-name"> {user.name} </span>
        </div>

        {/* Buttons */}
        <div className="sidebar-buttons">
            <SidebarButton icon="fas fa-tachometer-alt" name="Dashboard" />
            <SidebarButton icon="fas fa-users" name="Users" />
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
            <p className="footer-org lg"><strong>DASH</strong>min</p>
            <p className="footer-org xs"><strong>d</strong>min</p>
        </div>
        
    </div>
);

// Connect
export default Sidebar;