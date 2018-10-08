import { Action } from '../../types';

interface State {
  target: string;
}

const initialState = {
  target: '북아메리카'
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'FIRST_TARGET':
      return (state = { ...state, target: action.payload });
    default:
      return state;
  }
}

export default reducer;
