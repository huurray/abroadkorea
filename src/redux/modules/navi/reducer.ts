import { Action } from '../../types';

interface State {
  location: string;
  isSelected: number;
  url: string;
}

const initialState = {
  location: '북아메리카',
  isSelected: 0,
  url: ''
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return (state = { ...state, location: action.payload });
    case 'SET_NAV_SELECT':
      return (state = { ...state, isSelected: action.payload });
    case 'SET_IFRAME_URL':
      return (state = { ...state, url: action.payload });
    default:
      return state;
  }
}

export default reducer;
