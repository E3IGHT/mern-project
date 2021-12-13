import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    
    async availableDates () {
        let r = await api.get(`/avaliableDays`);
        return r.data;
    }

    async availableMovies(data) {
        let r = await api.get(`/availableMovies?date=${data}`);
        return r.data;
    }


}