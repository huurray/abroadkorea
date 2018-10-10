import { User } from './modules/user';

export type Action =
  | { type: 'USER_GET', payload: User }
  | { type: 'USER_LOGOUT' }
  | { type: 'SET_LOCATION', payload: string }
  | { type: 'SET_NAV_SELECT', payload: number }
  | { type: 'SET_IFRAME_URL', payload: string }


