import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieService} from "../../services/movie.service";
import {MovieByGenre} from "./MovieByGenre";

export const MoviesByGenre=()=>{
    const {state:{genre}}=useLocation()
    const [movie,setMovies] = useState([])

    useEffect(() => {
        movieService.getAll().then(({data})=>setMovies(data))
    }, []);

    const moviesByGenre = movie.results?.filter(movies=>genre.id.includes(movies.genre_ids))||[];

    return(<div>
        {moviesByGenre.map(movieByGenre=><MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
    </div>)


}