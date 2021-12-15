import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    
    async availableDates () {
        let r = await api.get(`/availableDays`);
        return r.data;
    }

    async availableMovies(date) {
        let r = await api.get(`/availableMovies?date=${date}`);
        return r.data;
    }

    async availableSessions(film,date) {
        let r = await api.get(`/availableSessions?film=${film}&date=${date}`);
        return r.data;
    }


}