// types
import { Action } from '../../types';

export const setLocationAction = (data): Action => ({
  type: 'SET_LOCATION',
  payload: data
});

///////////////////////////////////////////////////////
export function setLocation(location) {
  return async dispatch => {
    try {
      dispatch(setLocationAction(location));
    } catch (err) {
      console.log(err);
    }
  };
}

