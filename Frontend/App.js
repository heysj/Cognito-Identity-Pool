import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { Context } from './Context/authContext';
import CreateBook from './CreateBook';
import Home from './Home';
import './index.css';
import View from './View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';



const App = () => {
  return <Router>
    <Context>
      <ToastContainer autoClose="1500" limit={1} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/create" component={CreateBook} />
        <Route path="/view/:id" component={View} />
      </Switch>
    </Context>
  </Router>
}

export default App
