import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListStudent from './components/list-Student.component';
import EditStudent from './components/edit-Student.component';
import CreateStudent from './components/create-Student.component';
import DeleteStudent from './components/delete-Student.component';
import TestComp from './components/testComp';
// import Canvas from './components/canvas';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">School MERN App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">List Student</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Student</Link>
              </li>

              {/* below is testComp */}
              {/* <li className="navbar-item">
                <Link to="/test" className="nav-link">Line Generator</Link>
              </li> */}

              {/* <li className="navbar-item">
                <Link to="/canvas" className="nav-link">Canvas</Link>
              </li> */}

            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={ListStudent} />
        <Route path="/edit/:id" component={EditStudent} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/delete/:id" component={DeleteStudent} />
        {/* <Route path="/test" component={TestComp} /> */}
        {/* <Route path="/canvas" component={Canvas} /> */}
        {/* testcomp below */}
      </div>
    
    </Router>
  );
}

export default App;