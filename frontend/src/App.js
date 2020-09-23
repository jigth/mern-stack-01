import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import NoteCreator from './components/NoteCreator';
import UserCreator from './components/UserCreator';

function App() {
  return (
    <Router>
      <Navigation />
      
        <div className="container mt-5">
          <Route path="/" exact component={ NoteList } />
          <Route path="/edit/:id" component={ NoteCreator } />
          <Route path="/create" component={ NoteCreator } />
          <Route path="/user" component={ UserCreator } />
        

      </div>
    </Router>
  );
}

export default App;
