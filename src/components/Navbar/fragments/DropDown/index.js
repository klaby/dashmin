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
                dropdown: 'dropdown--min'
            }

            // Paths
            this.paths = {
                dropMin: () => {this.setState({dropdown: 'dropdown--min'})},
                dropMax: () => {this.setState({dropdown: 'dropdown'})}
            }

            // Methods
            this.handlerDropdown = this.handlerDropdown.bind(this);
            this.handlerClickOutside(this);
        }

        //Change DropDown
        handlerDropdown(){
            if(this.state.dropdown === 'dropdown--min') this.paths.dropMax();
            else this.paths.dropMin();
        }

        // Hide Drop
        handlerClickOutside(){
            window.addEventListener('click', e => {
                if(this.setWrapperRef && !this.setWrapperRef.contains(e.target)) this.paths.dropMin();
            });
        }

        // render
        render(){
            return (
                <div className={this.state.dropdown} ref={(node) => this.setWrapperRef = node}>
                    
                    {/* Profile */}
                    <div className="dropdown__profile">
                        <img className="dropdown__profile__avatar" src={this.props.profileImage} alt="" onClick={this.handlerDropdown}/>
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