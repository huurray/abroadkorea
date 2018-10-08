import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Reducer
import user from './modules/user';
import navi from './modules/navi';

const middlewares: any[] = [thunk];
const rootReducer = combineReducers({
  user,
  navi
});

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );

  return { store };
}

export default configureStore;
