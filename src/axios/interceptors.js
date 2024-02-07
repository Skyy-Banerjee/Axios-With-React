import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://course-api.com',

});

//Request
authFetch.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json';
    console.log(`request sent!`);
    return request
}, (err) => {
    return Promise.reject(err);
});

//Response
authFetch.interceptors.response.use((response) => {
    console.log('got response!');
    return response;
}, (err) => {
    console.log(err.response);
    if (err.response.status === 404) {
        //do something
        console.log(('NOT FOUND'));
    }
    return Promise.reject(err);
});

export default authFetch;