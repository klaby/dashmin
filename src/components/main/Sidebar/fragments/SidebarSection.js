// React
import React from 'react';

// SidebarSection
const SidebarSection = (props) => (
    <div className="sections">
        <div className="sidebar__buttons__section-title">
            <h3>{props.title}</h3><hr></hr>
        </div>
        {props.children}
    </div>
);

export default SidebarSection;