import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const genreService={
    getAll:()=>axiosService.get(urls.genres)
}

export {genreService}