import {useEffect, useState} from "react";
import {genreService} from "../../../services/genre.service";
import {Genre} from "../Genre/Genre";

export const Genres=()=>{
    const [genres,setGenres] = useState([])

    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data))
    }, []);

    return(<div>
        {genres.genres?.map(genre=><Genre key={genre.id} genre={genre}/>)}
    </div>)

}