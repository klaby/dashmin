// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions
import SidebarActions from '../store/actions/sidebar';

// Components
import Sidebar from '../components/main/Sidebar';

// State and Actions
const mapStateToProps = state => ({
    classes: state.dashboard.classes,
    user: state.user.user
});

const mapDispatchToProps = dispatch => bindActionCreators(SidebarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);