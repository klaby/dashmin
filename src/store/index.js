// Imports
import { createStore }            from 'redux';

// Reducers
import rootReducers               from './ducks';

// Store
const store                       = createStore(rootReducers);

export default store;