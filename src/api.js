const BASE_URL = 'http://localhost:8000/api/';

async function callApi(endpoint, options={}){
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
    notes : {
        list() {
            return callApi('notes/')
        },
        create(note) {
            return callApi('notes/', {
                method: 'POST',
                body : JSON.stringify(note)
            });
        },
        get(noteId){
            return callApi(`notes/${noteId}/`);
        },
        update(noteId, updates){
            return callApi(`notes/${noteId}/`,{
                method: 'PUT',
                body: JSON.stringify(updates)
            });
        },
        remove(noteId){
            return callApi(`notes/${noteId}/`,{
                method : 'DELETE'
            })
        },
    },
}

export default api;