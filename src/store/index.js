// Imports
import {createStore} from 'redux';

// Reducers
import rootReducers from './reducers';

// Store
const store = createStore(rootReducers);

export default store;