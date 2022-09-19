import React from 'react';
import Header from '../Header/Header'
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import { Route, Switch, useHistory } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound'

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
                    <Header
                        loggedIn={loggedIn}
                    />
                    <Main />
                    <Footer />
                </Route>

                <Route path='/movies'>
                    <Header
                        loggedIn={loggedIn}
                    />
                    <Movies />
                    <Footer />
                </Route>

                <Route path='/saved-movies'>
                    <Header
                        loggedIn={loggedIn}
                    />
                    <SavedMovies />
                    <Footer />
                </Route>

                <Route path='/profile'>
                    <Header
                        loggedIn={loggedIn}
                    />
                    <Profile
                        logOut={logOut}
                    >
                    </ Profile>
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
