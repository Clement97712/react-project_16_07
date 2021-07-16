import "./css/index.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home";
import MyGoogleMap from "./component/MyGoogleMap";
import MyFirebase from "./component/Firebase";
import { Link as MyLink } from "react-uikit";

function App() {
  return (
    <Router>
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/firebase">My Firebase</Link>
            </li>

            <li>
              <Link className="uk-link-text" to="/googlemap">
                My Google Map
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="uk-container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/googlemap" exact component={MyGoogleMap}></Route>
        <Route path="/firebase" exact component={MyFirebase}></Route>
      </div>
    </Router>
  );
}

export default App;
