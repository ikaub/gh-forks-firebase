import { ReposActions } from './repos.types';
import { Repository } from './repos.models';

export type ReposState = {
  repos: Repository[];
};

const initialState: ReposState = {
  repos: [],
};

export const reposReducer = (state: ReposState = initialState, action: ReposActions): ReposState => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
