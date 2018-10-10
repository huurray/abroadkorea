import { Action } from '../../types';

interface State {
  location: string;
  isSelected: number;
}

const initialState = {
  location: '북아메리카',
  isSelected: 0
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return (state = { ...state, location: action.payload });
    case 'SET_NAV_SELECT':
      return (state = { ...state, isSelected: action.payload });
    default:
      return state;
  }
}

export default reducer;
