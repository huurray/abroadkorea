// types
import { Action } from '../../types';

export const setLocationAction = (data): Action => ({
  type: 'SET_LOCATION',
  payload: data
});
export const setNavSelectAction = (data): Action => ({
  type: 'SET_NAV_SELECT',
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

export function setNavSelect(i) {
  return async dispatch => {
    try {
      dispatch(setNavSelectAction(i));
    } catch (err) {
      console.log(err);
    }
  };
}


