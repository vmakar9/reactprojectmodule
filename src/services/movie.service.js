import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const movieService={
    getAll:(page)=>axiosService.get(urls.movies,{params:{page}}),
    getByGenre:(with_genres)=>axiosService.get(urls.movies,{params:{with_genres}})
}

export {movieService}