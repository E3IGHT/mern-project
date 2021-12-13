import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    
    async avaliableDates () {
        let r = await api.get(`/avaliableDays`);
        return r.data;
    }


}