// React
import React, {Component} from 'react';

// SidebarButton class
export default class SidebarButton extends Component {
    render(){
        return(
            <div className="side-button">
                <i className={this.props.icon}></i><a className="button-name" href=""> {this.props.name} </a>
            </div>
        );
    }
}