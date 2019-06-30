// Types
export const Types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
};

// Initial State
const INITIAL_STATE = {
  sidebar: 'desktop',
  navbar: 'desktop',
  content: 'desktop',
  user: {
    avatar: 'https://i.imgur.com/NpICPSl.jpg',
    name: 'R o m u l l o',
    jobRole: 'Administrator',
  },
};

// Reducer
export default function dashboard(state = INITIAL_STATE, action) {
  switch (action.type) {
    // TOGGLE_SIDEBAR
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
