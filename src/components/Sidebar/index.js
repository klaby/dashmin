// Imports
import React from 'react';
import {Link} from 'react-router-dom';

// Styles
import './index.scss';

// Components
import SidebarButton from './fragments/SidebarButton';
import SidebarSection from './fragments/SidebarSection';

// Sidebar
const Sidebar = ( {classes, user} ) => (
    <div className={classes.sidebar}>
        {/* Brand */}
        <div className="sidebar__brand">
            <h1>
                <Link className="sidebar__brand-link lg" to=""><strong>DASH</strong>min</Link>
                <Link className="sidebar__brand-link xs" to=""><strong>d</strong>min</Link>
            </h1>
        </div>

        {/* Profile */}
        <div className="sidebar__profile">
            <div className="sidebar__profile__avatar-status">
                <img className="sidebar__profile__avatar-status__avatar" src={user.avatar} alt=""></img>
                <span className="is-online"></span>
            </div>
            <span className="sidebar__profile__name"> {user.name} </span>
        </div>

        {/* Buttons */}

        <div className="sidebar__buttons">

            {/* Home */}
            <SidebarSection title={'HOME'}>
                <SidebarButton icon="fas fa-tachometer-alt" name="Dashboard" route="/" />
            </SidebarSection>

            {/* Admin */}
            <SidebarSection title={'ADMIN'}>
                <SidebarButton icon="fas fa-users" name="Users" route="/users" />
                <SidebarButton icon="fas fa-file-invoice-dollar" name="Financial" route="/financial" />
                <SidebarButton icon="fas fa-cart-plus" name="Products" route="/products"/>
                <SidebarButton icon="fas fa-chart-pie" name="Reports" route="/reports" />
            </SidebarSection>

        </div>

        {/* Footer */}
        <div className="sidebar__footer">
            <p className="sidebar__footer__org lg"><strong>DASH</strong>min</p>
            <p className="sidebar__footer__org xs"><strong>d</strong>min</p>
        </div>
        
    </div>
);

// Connect
export default Sidebar;