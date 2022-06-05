import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
