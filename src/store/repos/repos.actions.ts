import { Dispatch } from 'redux';
import { FetchResults } from './repos.types';
import axios, { AxiosResponse } from 'axios';
import { Repository } from './repos.models';

export const FETCH_RESULTS = 'FETCH_RESULTS';

export const fetchResults = (repoInfo: string) => async (dispatch: Dispatch<FetchResults>) => {
  const { data }: AxiosResponse<Repository[]> =
    await axios.get<Repository[]>(`https://api.github.com/repos/${repoInfo}/forks?per_page=10`);
  dispatch({
    type: FETCH_RESULTS,
    payload: data,
  });
};
