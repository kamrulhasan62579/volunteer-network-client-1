import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Donation from './components/Donation/Donation';
import Login from './components/Login/Login';
import RegisterEvent from './components/RegisterEvent/RegisterEvent';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegListData from './components/RegListData/RegListData';
import RegisterList from './components/RegisterList/RegisterList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/events">
              <Events></Events>
          </Route>
          <Route path="/donation">
              <Donation></Donation>
          </Route>
          <PrivateRoute path="/registerEvent/:id">
              <RegisterEvent></RegisterEvent>
          </PrivateRoute>
          <Route path="/login">
               <Login></Login>
          </Route>
          <Route path="/reglist">
              <RegisterList></RegisterList>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
