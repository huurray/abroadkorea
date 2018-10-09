import { Action } from '../../types';

interface State {
  location: string;
}

const initialState = {
  location: '북아메리카'
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return (state = { ...state, location: action.payload });
      
    default:
      return state;
  }
}

export default reducer;
