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
const advertisements = {
    list() {
        return callApi('advertisements/')
    },
    create(adv) {
        return callApi('advertisements/', {
            method: 'POST',
            body: JSON.stringify(adv)
        });
    },
    get(advId) {
        return callApi(`advertisements/${advId}/`);
    },
    update(advId, updates) {
        return callApi(`advertisements/${advId}/`, {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    },
    remove(advId) {
        return callApi(`advertisements/${advId}/`, {
            method: 'DELETE'
        })
    },
    uploadImage() {
        return callApi(`advertisements/upload/`)
    },
}


export default advertisements;