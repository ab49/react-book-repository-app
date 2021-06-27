import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BooksList from './routes/BooksList';
import AddBooksList from './routes/AddBooksList';

import NotFound from './routes/NotFound';

function App() {
  return (
    <div className="app to-do-app-wrapper">
      <h1>test  </h1>
      <Router>
        <Switch>

          <Route exact path="/add-books">
            <AddBooksList />
          </Route> 

          <Route exact path="/">
            <BooksList />
          </Route> 

          <Route component={NotFound} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
