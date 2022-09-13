import React from 'react';
import Header from '../Header/Header'
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import { Route, Switch } from "react-router-dom";

function App() {
    const [loggedIn, setIsLoggedIn] = React.useState(true);

    function login() {
        setIsLoggedIn(true);
    }

    function logOut() {
        setIsLoggedIn(false);
    }

    return (
        <div className="App">
            <Header
                loggedIn={loggedIn}
                login={login}
                logOut={logOut}
            />

            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/movies'>
                    <Movies/>
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
