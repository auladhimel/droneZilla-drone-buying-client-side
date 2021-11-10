import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
