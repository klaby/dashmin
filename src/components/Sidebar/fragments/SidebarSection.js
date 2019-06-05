// React
import React from 'react';

// SidebarSection
const SidebarSection = (props) => (
    <div className="sections">
        <div className={props.class}>
            <h3>{props.title}</h3><hr></hr>
        </div>
        {props.children}
    </div>
);

export default SidebarSection;