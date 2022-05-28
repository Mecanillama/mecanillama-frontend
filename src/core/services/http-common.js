import axios from "axios";

//API runs in port 3000, consider this for all services.js
export default axios.create({
    baseURL: 'https://mecanillama-json-server.herokuapp.com/',
    headers: { 'Content-type': 'application/json' }
})