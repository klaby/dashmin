// React
import React, {Component} from 'react';

// Style
import './index.scss';

// NavbarDropDown class
export default class DropDown extends Component {

        // Constructor 
        constructor(props){
            super(props);

            // State
            this.state = {
                dropClass: 'navbar-dropdown-min',
                toggleIcon: 'btn-up-down fas fa-caret-down'
            }

            // Paths
            this.paths = {
                dropMin: () => {
                    this.setState({dropClass: 'navbar-dropdown-min', toggleIcon: 'btn-up-down fas fa-caret-down'})
                },
                dropMax: () => {
                    this.setState({dropClass: 'navbar-dropdown', toggleIcon: 'btn-up-down fas fa-caret-up'})
                }
            }

            // Methods
            this.changeDrop = this.changeDrop.bind(this);
            this.handleClickOutside(this);
        }

        //Change DropDown
        changeDrop(){
            if(this.state.dropClass === 'navbar-dropdown-min') this.paths.dropMax();
            else this.paths.dropMin();
        }

        // Hide Drop
        handleClickOutside(){
            window.addEventListener('click', e => {
                if(this.setWrapperRef && !this.setWrapperRef.contains(e.target)) this.paths.dropMin();
            });
        }

        // render
        render(){
            return (
                <div className={this.state.dropClass} ref={(node) => this.setWrapperRef = node}>
                    
                    {/* Toggle */}
                    <div className={this.state.toggleIcon} onClick={this.changeDrop}></div>
                    
                    {/* Profile */}
                    <div className="profile-details">
                        <div className="image-status">
                            <img className="user-image" src={this.props.profileImage} alt=""/>
                        </div>
                        <div className="user-name"> {this.props.profileName} </div>
                        <div className="user-function"> {this.props.profileFunction} </div>
                    </div>
    
                    <hr/>
    
                    {/* Buttons */}
                    <ul className="buttons">
                        <li className="drop-button">
                            <i className="fas fa-tint"></i><a className="button-name" href="#"> Customization </a>
                        </li>  
                        <li className="drop-button">
                            <i className="fas fa-cog"></i><a className="button-name" href="#"> Settings </a>
                        </li> 
                        <li className="drop-button">
                            <i className="fas fa-user-alt"></i><a className="button-name" href="#"> Profile </a>
                        </li>  
                        <li className="drop-button">
                            <i className="fas fa-sign-out-alt"></i><a className="button-name" href="#"> Logout </a>
                        </li> 
                    </ul>
    
                </div>
            );
        }
}