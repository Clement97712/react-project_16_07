import "./css/index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import MyGoogleMap from "./component/MyGoogleMap";
import MyFirebase from "./component/Firebase";
import Weather from "./component/Weather";

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
            <li>
              <Link className="uk-link-text" to="/weather">
                Weahter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="uk-container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/googlemap" exact component={MyGoogleMap}></Route>
        <Route path="/firebase" exact component={MyFirebase}></Route>
        <Route path="/weather" exact component={Weather}></Route>
      </div>
    </Router>
  );
}

export default App;
