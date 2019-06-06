// React
import React, {Component} from 'react';

// Style
import './index.scss';

// Components
import DropButton from './DropButton';

// NavbarDropDown class
export default class DropDown extends Component {

        // Constructor 
        constructor(props){
            super(props);

            // State
            this.state = {
                dropClass: 'dropdown--min',
                toggleIcon: 'btn-up-down fas fa-caret-down'
            }

            // Paths
            this.paths = {
                dropMin: () => {
                    this.setState({dropClass: 'dropdown--min', toggleIcon: 'btn-up-down fas fa-caret-down'})
                },
                dropMax: () => {
                    this.setState({dropClass: 'dropdown', toggleIcon: 'btn-up-down fas fa-caret-up'})
                }
            }

            // Methods
            this.changeDrop = this.changeDrop.bind(this);
            this.handleClickOutside(this);
        }

        //Change DropDown
        changeDrop(){
            if(this.state.dropClass === 'dropdown--min') this.paths.dropMax();
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
                    <div className="dropdown__profile">
                        <img className="dropdown__profile__avatar" src={this.props.profileImage} alt=""/>
                        <div className="dropdown__profile__name"> {this.props.profileName} </div>
                        <div className="dropdown__profile__function"> {this.props.profileFunction} </div>
                    </div>
    
                    <hr/>
    
                    {/* Buttons */}
                    <div className="dropdown__buttons">
                        <DropButton route="" icon="fas fa-tint" name="Customization" />
                        <DropButton route="" icon="fas fa-cog" name="Settings" />
                        <DropButton route="" icon="fas fa-user-alt" name="Profile" />
                        <DropButton route="" icon="fas fa-sign-out-alt" name="Logout" />
                    </div>
    
                </div>
            );
        }
}