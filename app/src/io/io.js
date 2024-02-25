import axios from "axios";
const BASE_URL = 'https://rpc.particle.network/ipfs';

const api = axios.create({
    baseURL : BASE_URL
});
api.interceptors.request.use((config) => {
    config.auth = {
        username: "1129d375-0af8-4a1b-b082-c5b537d39524",
        password: "smmg0JW5qjC5k6LzjTiJKmHSxHH0BqxzoQcB6HpG"
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});


const upload = async (file , setResponse) => { 
    const form = new FormData();
    form.append("file", file);

    try {
        const response = await api.post("/upload", form);
        setResponse(response.data);
    } catch (err) {
        console.log(err);
    }
}

export {
    upload
}