// types
import { Action } from '../../types';

export const getUserAction = (data): Action => ({
  type: 'FIRST_TARGET',
  payload: data
});

///////////////////////////////////////////////////////
export function setFirstTarget(target) {
  return async dispatch => {
    try {
      dispatch(getUserAction(target));
    } catch (err) {
      console.log(err);
    }
  };
}

