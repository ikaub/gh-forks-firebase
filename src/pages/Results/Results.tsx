import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { Repository } from '../../store/repos/repos.models';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const Results: React.FC = () => {
    const repos: Repository[] = useSelector((state: RootState) => state.repos.repos);

    return (
      <div className="results">
        <SearchBar/>
        <table className="results__table">
          <thead>
          <tr>
            <th>Repo Name</th>
            <th>Owner</th>
            <th>Star Count</th>
            <th>Repo Link</th>
          </tr>
          </thead>
          <tbody>
          {repos.map(repo => (
            <tr>
              <td>{repo.full_name}</td>
              <td>{repo.owner.login}</td>
              <td>{repo.stargazers_count}</td>
              <td><a href={repo.clone_url}>{repo.clone_url}</a></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
;
