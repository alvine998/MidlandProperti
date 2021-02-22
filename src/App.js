
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Profil from './pages/Profil';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/profil">
          <Profil/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
