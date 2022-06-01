import axios from "axios";

const instance = axios.create({
    baseURL:'http://www.omdbapi.com',
})
const key = 'bf5c50b1';

export const MOVIE_API = {
    searchFilm: (title: string)=>{
        const query = `/?apikey=${key}&s=${title}`
        return instance
            .get(query)
    }
}