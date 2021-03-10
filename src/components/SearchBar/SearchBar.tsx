import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchResults } from '../../store/repos/repos.actions';

export const SearchBar: React.FC = () => {
  const [ search, setSearch ] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchResults(search, 1));
    history.push({
      pathname: '/results',
      state: search,
    });
  };

  return (
    <div className="searchbar">
      <label>
        <span>Search</span>
        <input value={search} onChange={handleChange} type="text" placeholder="Owner/RepoName"/>
      </label>
      <div onClick={handleSearch} className="search-btn">Search</div>
    </div>
  );
};
