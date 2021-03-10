import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import { Search } from './pages/Search/Search';
import { store } from './store/store';
import { Results } from './pages/Results/Results';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search/>
          </Route>

          <Route path="/results">
            <Results/>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
