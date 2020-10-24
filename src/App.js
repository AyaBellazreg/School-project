import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Courses from './components/pages/Courses';
import Footer from './components/footer/Footer';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import { ContextProvider, useStateValue } from './Context';
import '@babel/polyfill';

function App() {
    const { loading  , hasToken} = useStateValue();
    console.log(loading , "loading")
    console.log(hasToken , "token")
    return (
        <div className="App">
            {loading ? (
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Loading....</h1>
                </div>
            ) : (
                <div className="main-container">
                    <Router>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/courses" component={Courses} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </Router>
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default App;
