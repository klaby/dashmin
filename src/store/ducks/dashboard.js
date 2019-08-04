// Types
export const Types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
};

// Initial State
const INITIAL_STATE = {
  sidebar: 'desktop',
  navbar: 'desktop',
  content: 'desktop',
};

// Reducer
export default function dashboard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_SIDEBAR:
      if (action.dashboard.sidebar === 'desktop' && window.innerWidth < 576) {
        return ({
          ...state,
          sidebar: 'mobile',
          navbar: 'mobile',
        });
      } if (action.dashboard.sidebar === 'desktop' && window.innerWidth > 576) {
        return ({
          ...state,
          sidebar: 'min',
          navbar: 'min',
          content: 'min',
        });
      }
      return ({
        ...state,
        sidebar: 'desktop',
        navbar: 'desktop',
        content: 'desktop',
      });

    default:
      return state;
  }
}
