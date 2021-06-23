import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import BooksList from './routes/BooksList';
import AddBooksList from './routes/AddBooksList';

import NotFound from './routes/NotFound';

function App() {
  return (
    <div className="app to-do-app-wrapper">
      <Router>
        <Switch>

          <Route path="/add-books">
            <AddBooksList />
          </Route> 

          <Route path="/">
            <BooksList />
          </Route> 
          

          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
