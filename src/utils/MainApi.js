export const BASE_URL = 'http://cherbot1.movies.nomoredomains.sbs/';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
    }
}

export const register = (name, password, email) => {
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

export const authorize = (password, email) => {
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
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(checkResponse)
};
