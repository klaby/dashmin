// Imports
import {connect} from 'react-redux';

// Component
import Content from '../components/Content';

// State and props
const mapStateToProps = state => ({
    classes: state.dashboard.classes
});

export default connect(mapStateToProps)(Content);