import { User } from './modules/user';

export type Action =
  | { type: 'USER_GET', payload: User }
  | { type: 'USER_LOGOUT' }
  | { type: 'SET_LOCATION', payload: string }


