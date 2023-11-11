
import {useEffect, useState} from "react";
import {genreService} from "../../../../services/genre.service";
import {useNavigate} from "react-router-dom";
import {urls} from "../../../../urls/urls";
import css from "./Movie.module.css"
import ReactStars from "react-rating-stars-component/dist/react-stars";

export const Movie=({movie})=>{
    const {id,poster_path,title,vote_average,genre_ids,release_date}= movie


    const [genresName,setGenres] = useState([])

    const navigate = useNavigate()


    useEffect( () => {
         genreService.getAll().then(({data})=>setGenres(data))
    }, []);


    const genresNames = genresName.genres?.filter(genre=>genre_ids.includes(genre.id)) ||[];
    genresNames.length =2


    return(<div className={css.MovieList}>

      <div className={css.MovieCard} onClick={()=> navigate(`${id}`,{state:{movie}})}>
          <img className={css.MovieImage} src={`${urls.photo}/${poster_path}`} alt={`${title} poster`}/>
          <div>
              <ReactStars edit={false} activeColor={'red'} size={35} count={10} value={vote_average} isHalf={true} classNames={css.Rait}/>
          </div>
          <h4 className={css.MovieTitle}>{title}</h4>
          <div className={css.MovieGenres}>
              {genresNames.map((genre)=>(<p key={genre.id}>{genre.name}</p>))}
          </div>
          <h5 className={css.Release}>Release:{release_date}</h5>
      </div>
    </div>)
}