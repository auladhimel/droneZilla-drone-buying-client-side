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
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <div>


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <PrivateRoute path="/explore">
                <Explore />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/purchase">
                <Purchase />
              </PrivateRoute>
              <PrivateRoute path="/update/:productId">
                <UpdateProducts />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
