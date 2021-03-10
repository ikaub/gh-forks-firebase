import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { RootState } from '../../store/store';
import { Repository } from '../../store/repos/repos.models';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchResults } from '../../store/repos/repos.actions';
import database from './../../firebase';
import firebase from 'firebase';

export const Results: React.FC = () => {
    const repos: Repository[] = useSelector((state: RootState) => state.repos.repos);
    const dispatch = useDispatch();
    const { location: { state } } = useHistory();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentUrl, setCurrentUrl ] = useState(state);
    const { search } = useLocation();

    const handleLoadNext = () => {
      dispatch(fetchResults(currentUrl as string, currentPage + 1));
      setCurrentPage(currentPage + 1);
    };

    const handleLoadPrevious = () => {
      if (currentPage > 1) {
        dispatch(fetchResults(currentUrl as string, currentPage - 1));
        setCurrentPage(currentPage - 1);
      }
    };

    useEffect(() => {
      const params = new URLSearchParams(search);
      const page = params.get('page');
      const repository = params.get('repository');
      if (page && repository && !repos.length) {
        setCurrentPage(+page);
        setCurrentUrl(repository);
        dispatch(fetchResults(repository as string, page as string));
      }
    }, []);

    useEffect(() => {
      database.push({
        message: 'Hello, Firebase!',
      });
      database.on('value', (snapshot: firebase.database.DataSnapshot) => {
        const values = snapshot.val();
        console.log(values);
      });
    }, []);

    return (
      <div className="results">
        <SearchBar/>
        <div className="results__table-wrapper">
          <table className="results__table">
            <thead>
            <tr>
              <th>Repo Name</th>
              <th>Owner</th>
              <th>Star Count</th>
              <th>Repo Link</th>
              <th>Favorite</th>
            </tr>
            </thead>
            <tbody>
            {repos.map(repo => (
              <tr key={repo.full_name}>
                <td>{repo.full_name}</td>
                <td>{repo.owner.login}</td>
                <td>{repo.stargazers_count}</td>
                <td><a href={repo.clone_url}>{repo.clone_url}</a></td>
                <td><div className="results__add-favs-btn">Add to favorites</div></td>
              </tr>
            ))}
            </tbody>
          </table>
          <div className="results__table__controls">
            <div onClick={handleLoadPrevious}>&lt;</div>
            <div onClick={handleLoadNext}>&gt;</div>
          </div>
        </div>
      </div>
    );
  }
;
