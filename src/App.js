import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { createContext, useState } from 'react';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/SignUp">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/search/:dataId">
            <Search></Search>
          </PrivateRoute>
          <PrivateRoute path="/destination/:dataId">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/link">
            <Link></Link>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
