import { FETCH_RESULTS } from './repos.actions';
import { Repository } from './repos.models';

export type FetchResults = {
  type: typeof FETCH_RESULTS,
  payload: Repository[];
};

export type ReposActions = FetchResults;
