import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {genreService} from "../../services/genre.service";
import {urls} from "../../urls/urls";
import StarRatings from "react-star-ratings/build/star-ratings";

export const MovieDetails=()=>{
    const {state:{movie}} = useLocation();

    const { genre_ids, overview, original_language, original_title, popularity, title, vote_average, vote_count, poster_path} =movie

    const [genresName,setGenres] = useState([])

    useEffect( () => {
        genreService.getAll().then(({data})=>setGenres(data))
    }, []);


    const genresNames = genresName.genres?.filter(genre=>genre_ids.includes(genre.id)) ||[];

    return(<div>
        <div>
            <h3>{title}</h3>
            <img src={`${urls.photo}/${poster_path}`} alt={`${title} poster`}/>
            <h3>{original_title}</h3>
            <h4>{original_language}</h4>
            <p>{overview}</p>
            <div>
                {genresNames.map((genre)=>(<p key={genre.id}>{genre.name}</p>))}
            </div>
            <h5>{popularity}</h5>
            <p>{vote_count}</p>
            <p>{vote_average}</p>
            <StarRatings
                rating={vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                name='vote_average'
            />

        </div>
    </div>)
}