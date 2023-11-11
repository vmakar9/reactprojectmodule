import css from "./MovieByGenre.module.css"
import {urls} from "../../../urls/urls";
import ReactStars from "react-rating-stars-component";

export const MovieByGenre=({movieByGenre})=>{
    const {poster_path,title,vote_average,release_date} = movieByGenre
    return(<div className={css.MovieList}>

        <div className={css.MovieCard}>
            <img className={css.MovieImage} src={`${urls.photo}/${poster_path}`} alt={`${title} poster`}/>
            <div>
                <ReactStars edit={false} activeColor={'red'} size={35} count={10} value={vote_average} isHalf={true} classNames={css.Rait}/>
            </div>
            <h4 className={css.MovieTitle}>{title}</h4>

            <h5>Release:{release_date}</h5>


        </div>
    </div>)
}