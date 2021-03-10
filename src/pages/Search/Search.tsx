import React from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';

export const Search: React.FC = () => {

  return (
    <div className="search">
      <h1>Welcome to the GitHub Forks App!</h1>
      <SearchBar/>
    </div>
  );
};
