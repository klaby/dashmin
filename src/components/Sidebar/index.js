// Imports
import React from 'react';

// Styles
import './index.scss';

// Components
import SidebarButton from './fragments/SidebarButton';
import SidebarSection from './fragments/SidebarSection';

// Sidebar
const Sidebar = ( {classes, user} ) => (
    <div className={classes.sidebar.main}>
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

            {/* Home */}
            <SidebarSection title={'HOME'} class={classes.sidebar.sectionTitle}>
                <SidebarButton icon="fas fa-tachometer-alt" name="Dashboard" />
            </SidebarSection>

            {/* Admin */}
            <SidebarSection title={'ADMIN'} class={classes.sidebar.sectionTitle}>
                <SidebarButton icon="fas fa-users" name="Users" />
                <SidebarButton icon="fas fa-file-invoice-dollar" name="Financial" />
                <SidebarButton icon="fas fa-cart-plus" name="Products" />
                <SidebarButton icon="fas fa-chart-pie" name="Reports" />
            </SidebarSection>

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