// React
import React, {Component} from 'react';

// Style
import './index.scss';

// Navbar Button
export default class Button extends Component {

    // Render
    render(){
        return (
            <div className="navbar-button" onClick={this.props.event}>
                <i className={this.props.icon}></i>
                <span className={this.props.class}></span>
            </div>
        );
    }
}