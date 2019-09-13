const BASE_URL = 'http://localhost:8000/';

async function callApi(endpoint, options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}

const api = {
    datatoken: null,
    login : async (credentials) => {
        const data = await callApi('auth/', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        localStorage.setItem('token', data.token)
    },
    logout : () => {
        api.datatoken = null;
        return;
    }
}

export default api;