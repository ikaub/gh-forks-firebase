import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reposReducer, ReposState } from './repos/repos.reducer';

export type RootState = {
  repos: ReposState;
};

const rootReducer = combineReducers({
  repos: reposReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
