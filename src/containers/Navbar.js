// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions
import {Creators as NavbarActions} from '../store/ducks/dashboard';

// Component
import Navbar from '../components/Navbar';

// State e Actions
const mapStateToProps = state => ({
    classes: state.dashboard.classes,
    user: state.user.user    
})

const mapDispatchToProps = dispatch => bindActionCreators(NavbarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);