import axios from 'axios';



const instance = axios.create({
    baseURL:"http://loaclhost:8080",
})

export default instance;