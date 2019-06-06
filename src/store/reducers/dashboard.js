// Initial State
const INITIAL_STATE = {
    // classes
    classes: {
        sidebar: {
            main: 'sidebar',
            sectionTitle: 'section-title'
        },
        navbar: 'navbar',
        content: 'content' 
    }
}

// Reducer
export default function dashboard(state = INITIAL_STATE, action){
    switch(action.type) {

        // TOGGLE_SIDEBAR
        case 'TOGGLE_SIDEBAR':

            if(window.innerWidth < 576 && action.classes.sidebar.main === 'sidebar'){
                return {
                    ...state,
                    classes: {
                        sidebar: {
                            main: 'sidebar is-open',
                            sectionTitle: 'section-title'
                        },
                        navbar: 'navbar',
                        content: 'content' 
                    }
                }
            }
    
            else if (window.innerWidth > 576 && action.classes.sidebar.main === 'sidebar'){
                return {
                    ...state,
                    classes: {
                        sidebar: {
                            main: 'sidebar-min',
                            sectionTitle: 'section-title hide'
                        },
                        navbar: 'navbar-min',
                        content: 'content-min' 
                    }
                }
            }
    
            else {
                return {
                    ...state,
                    classes: {
                        sidebar: {
                            main: 'sidebar',
                            sectionTitle: 'section-title'
                        },
                        navbar: 'navbar',
                        content: 'content' 
                    }
                }
            }
            
        default:
            return state;
    }
}