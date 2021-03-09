import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import User from './components/User/User';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav className="nav-bar">
          <ul className="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <User></User>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <h1 className="bg-gradient bg-danger">Snap! No page found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
