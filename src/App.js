import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// pages of the website
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error';

// navbar for website
import Navbar from './components/Navbar';

// footer for the website
import Footer from './components/Footer';

function App() {
  return (
   <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/rooms/:slug" component = {SingleRoom} />
          <Route exact path = "/rooms" component = {Rooms} />
          <Route component = {Error} />
        </Switch>
        <Footer />
    </React.Fragment>
  );
}

export default App;
