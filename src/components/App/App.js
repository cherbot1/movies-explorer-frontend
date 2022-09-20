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
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {
    authorize,
    register,
    getUserMovies,
    getUserInfo,
    changeUserInfo,
    deleteMovie,
    addMovie
} from "../../utils/MainApi";

function App() {
    const [loggedIn, setIsLoggedIn] = React.useState(true);
    const [registered, setRegistered] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [apiMovies, setApiMovies] = React.useState([]);
    const [userMovies, setUserMovies] = React.useState([]);
    const [token, setToken] = React.useState('');
    const history = useHistory();

    function handleLogin({password, email}) {
        authorize(password, email).then((data) => {
            if (data) {
                localStorage.setItem("jwt", data.token);
                setToken(data.token);
                setIsLoggedIn(true);
                history.push('/movies');
            }
        })
            .catch((err) => {
                setIsLoggedIn(false);
                setRegistered(false);
                console.log(err);
            })
    }

    function checkToken() {
        const jwt = localStorage.getItem('jwt');

        if (jwt){
            getUserInfo(jwt).then((user) => {
                if (user) {
                    setIsLoggedIn(true);
                    history.push('/');
                }
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    React.useEffect(() => {
        checkToken();
    }, [])

    function handleRegister({name, password, email}) {
        register(name, password, email).then((res) => {
            if (res) {
                setRegistered(true);
                history.push('/signin');
            }
        })
            .catch((err) => {
                setRegistered(false);
                console.log(err);
            })
            .finally(() => {
                setIsInfoTooltipOpen(true);
            })
    }

    function logOut() {
        setIsLoggedIn(false);
        history.push('/');
    }

    function goToSignIn() {
        history.push('/signin');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">

                <Switch>
                    <Route exact path='/'>
                        <Main
                            loggedIn={loggedIn}
                        />
                    </Route>

                    <ProtectedRoute
                        exact path = '/movies'
                        component={Movies}
                        loggedIn={loggedIn}
                    />

                    <ProtectedRoute
                        exact path = '/saved-movies'
                        component={SavedMovies}
                        loggedIn={loggedIn}
                    />

                    <ProtectedRoute
                        exact path = '/profile'
                        component={Profile}
                        loggedIn={loggedIn}
                    />

                    <Route path='/signup'>
                        <Register

                        />
                    </Route>

                    <Route path='/signin'>
                        <Login

                        />
                    </Route>

                    <Route path='/*'>
                        <NotFound />
                    </Route>
                </Switch>

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
