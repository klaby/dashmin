// Initial State
const INITIAL_STATE = {
    // classes
    classes: {
        sidebar: 'sidebar',
        navbar: 'navbar',
        content: 'content' 
    }
}

// Reducer
export default function dashboard(state = INITIAL_STATE, action){
    switch(action.type) {

        // TOGGLE_SIDEBAR
        case 'TOGGLE_SIDEBAR':

            if(window.innerWidth < 576 && action.classes.sidebar === 'sidebar'){
                return {
                    ...state,
                    classes: {
                        sidebar: 'sidebar--mobile',
                        navbar: 'navbar',
                        content: 'content' 
                    }
                }
            }
    
            else if (window.innerWidth > 576 && action.classes.sidebar === 'sidebar'){
                return {
                    ...state,
                    classes: {
                        sidebar: 'sidebar--min',
                        navbar: 'navbar--min',
                        content: 'content--min' 
                    }
                }
            }
    
            else {
                return {
                    ...state,
                    classes: {
                        sidebar: 'sidebar',
                        navbar: 'navbar',
                        content: 'content' 
                    }
                }
            }
            
        default:
            return state;
    }
}