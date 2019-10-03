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
        return callApi('announcements/')
    },
    create(adv) {
        return callApi('announcements/', {
            method: 'POST',
            body: JSON.stringify(adv)
        });
    },
    get(advId) {
        return callApi(`announcements/${advId}/`);
    },
    update(advId, updates) {
        return callApi(`announcements/${advId}/`, {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    },
    remove(advId) {
        return callApi(`announcements/${advId}/`, {
            method: 'DELETE'
        })
    },
    uploadImage() {
        return callApi(`announcements/upload/`)
    },
}


export default advertisements;