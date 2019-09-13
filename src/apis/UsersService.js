const BASE_URL = 'http://localhost:8000/api/';

async function callApi(endpoint, options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}
const users = {
    list() {
        return callApi('users/')
    },
    create(note) {
        return callApi('users/', {
            method: 'POST',
            body: JSON.stringify(note)
        });
    },
    get(noteId) {
        return callApi(`users/${noteId}/`);
    },
    update(noteId, updates) {
        return callApi(`users/${noteId}/`, {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    },
    remove(noteId) {
        return callApi(`users/${noteId}/`, {
            method: 'DELETE'
        })
    },
}


export default users;