import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Courses from './components/pages/Courses';
import Footer from './components/footer/Footer';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import { ContextProvider } from './Context';
import "@babel/polyfill";



function App() {
  return (
    <div className='App'>
    <ContextProvider>
    
      <div className="main-container">
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/login' component={Login} />
         <Route exact path='/dashboard' component={Dashboard} />
        </Router>
      </div>
      <Footer />
    </ContextProvider>
    </div>
  );
}

export default App;
