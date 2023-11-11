import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieService} from "../../../services/movie.service";
import {MovieByGenre} from "../MovieByGenre/MovieByGenre";

export const MoviesByGenre=()=>{
    const {id} = useParams()
    const [movie,setMovies] = useState([])



    useEffect(() => {
       movieService.getByGenre(id).then(({data})=>setMovies(data))
    }, [id]);


    return(<div>
        {movie.results?.map(movieByGenre=><MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
    </div>)


}