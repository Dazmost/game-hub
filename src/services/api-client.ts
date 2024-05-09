import axios from "axios";

// with this configuration this key will be included
// in the query string of every http request we send
// to our backend
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e12c9bdb26ce45eb9f3f6912ed95b281',
    }
})