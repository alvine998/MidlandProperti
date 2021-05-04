
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Profil from './pages/Profil';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import VisiMisi from './pages/VisiMisi';
import Sejarah from './pages/Sejarah';
import Hubungi from './pages/Hubungi';
import Warakas from './pages/Warakas';
import Swasembada from './pages/Swasembada';
import Bahari from './pages/Bahari';
import Papanggo from './pages/Papanggo';
import Cilincing from './pages/Cilincing';
import Penghargaan from './pages/Award';
import Investasi from './pages/Investasi';
import Karir from './pages/Karir';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/profil">
          <Profil/>
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/visimisi">
          <VisiMisi/>
        </Route>
        <Route exact path="/sejarah">
          <Sejarah/>
        </Route>
        <Route exact path="/hubungikami">
          <Hubungi/>
        </Route>
        <Route exact path="/ourproject/warakas">
          <Warakas/>
        </Route>
        <Route exact path="/ourproject/swasembada">
          <Swasembada/>
        </Route>
        <Route exact path="/ourproject/bahari">
          <Bahari/>
        </Route>
        <Route exact path="/ourproject/papanggo">
          <Papanggo/>
        </Route>
        <Route exact path="/ourproject/cilincing">
          <Cilincing/>
        </Route>
        <Route exact path="/penghargaan">
          <Penghargaan/>
        </Route>
        <Route exact path="/investasi">
          <Investasi/>
        </Route>
        <Route exact path="/karir">
          <Karir/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
