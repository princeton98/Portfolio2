import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import NavbarPortfolio from "./components/Navbar/NavbarPortfolio"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/components/Home/Home"
import Project from "../src/components/Projects";

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarPortfolio/>
      <Home></Home>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/project">
          <Project/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
