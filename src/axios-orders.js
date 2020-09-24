import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myburger-react-ad894.firebaseio.com/'
});

export default instance;