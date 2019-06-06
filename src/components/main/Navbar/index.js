// Imports
import React from 'react';

// Styles
import './index.scss';

// Componenets
import DropDown from './fragments/DropDown/';
import NavbarButton from './fragments/NavbarButton';

// Navbar
const Navbar = ({classes, user, handlerSidebar}) => (
    <div className={classes.navbar}>
        {/* Left */}
        <div className="btn-group">
            <NavbarButton icon={'fas fa-bars'} event={() => handlerSidebar(classes)} />
            <NavbarButton icon={'fas fa-bell'} />
            <NavbarButton icon={'fas fa-envelope'} class={'is-notification'}/>
        </div>

        {/* Right */}
        <DropDown 
            profileImage={user.avatar}
            profileName={user.name}
            profileFunction={user.function}
        />
    </div>
);

export default Navbar;