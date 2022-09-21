export const BASE_URL = 'https://cherbot1.movies.nomoredomains.sbs';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
    }
}

export const register = ({name, password, email}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, password, email})
    })
        .then(checkResponse)
};

export const authorize = ({password, email}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then(checkResponse)
};

export const getUserInfo = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: "Bearer " + token,
        }
    })
        .then(checkResponse)
};

export const changeUserInfo = (data, token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            "Content-Type": 'application/json',
            authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    })
        .then(checkResponse)
};

export const getUserMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        headers: {
            authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    }).then(checkResponse)
};

export const addMovie = (movies, token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: movies.country,
            director: movies.director,
            duration: movies.duration,
            year: movies.year,
            description: movies.description,
            image: 'https://api.nomoreparties.co' + movies.image.url,
            trailerLink: movies.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + movies.thumbnail,
            movieId: movies.id,
            nameRU: movies.nameRU,
            nameEN: movies.nameEN,
        }),
    }).then(checkResponse)
};

export const deleteMovie = (movieId, token) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    }).then(checkResponse)
}