import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import { Route, Switch, useHistory } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [loggedIn, setIsLoggedIn] = React.useState(false);
    const history = useHistory();

    function login() {
        setIsLoggedIn(true);
        history.push('/movies');
    }

    function logOut() {
        setIsLoggedIn(false);
        history.push('/');
    }

    function goToSignIn() {
        history.push('/signin');
    }

    return (
        <div className="App">

            <Switch>
                <Route exact path='/'>
                    <Main
                        loggedIn={loggedIn}
                    />
                </Route>

                <Route path='/movies'>
                    <Movies
                        loggedIn={loggedIn}
                    />
                </Route>

                <Route path='/saved-movies'>
                    <SavedMovies
                        loggedIn={loggedIn}
                    />
                </Route>

                <Route path='/profile'>
                    <Profile
                        loggedIn={loggedIn}
                        logOut={logOut}
                    />
                </Route>

                <Route path='/signup'>
                    <Register
                        register={goToSignIn}
                    />
                </Route>

                <Route path='/signin'>
                    <Login
                        login={login}
                    />
                </Route>

                <Route path='/*'>
                    <NotFound />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
