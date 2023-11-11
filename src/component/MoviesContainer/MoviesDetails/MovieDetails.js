import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {genreService} from "../../../services/genre.service";
import {urls} from "../../../urls/urls";
import ReactStars from "react-rating-stars-component";
import css from "./MovieDetails.module.css";

export const MovieDetails=()=>{
    const {state:{movie}} = useLocation();

    const { genre_ids, overview, original_language, original_title, popularity, title, vote_average, vote_count, poster_path} =movie

    const [genresName,setGenres] = useState([])

    useEffect( () => {
        genreService.getAll().then(({data})=>setGenres(data))
    }, []);


    const genresNames = genresName.genres?.filter(genre=>genre_ids.includes(genre.id)) ||[];

    return(<div className={css.MovieCard}>
        <div className={css.MovieInfo}>
            <h3 className={css.Title}>{title}</h3>
            <img className={css.MovieImage} src={`${urls.photo}/${poster_path}`} alt={`${title} poster`}/>
            <h3 className={css.OriginalTitle}>{original_title}</h3>
            <h4 className={css.OriginalLanguage}>{original_language}</h4>
            <p className={css.Overview}>{overview}</p>
            <div className={css.Genres}>
                {genresNames.map((genre)=>(<p key={genre.id}>{genre.name}</p>))}
            </div>
            <h5 className={css.Popularity}>{popularity}</h5>
            <p className={css.VoteCount}>{vote_count}</p>
            <p className={css.VoteAverage}>{vote_average}</p>
            <div className={css.RaitBlock}>
                <ReactStars edit={false} activeColor={'red'} size={35} count={10} value={vote_average} isHalf={true} classNames={css.Rait}/>
            </div>

        </div>
    </div>)
}