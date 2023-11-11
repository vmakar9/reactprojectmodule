import css from "./Header.module.css"
import {Link} from "react-router-dom";
import {User} from "../UserContainer/User";



export const Header=()=>{
    return(<div className={css.Header}>
        <div>
            <Link to={'/movies'}>Movies</Link>
            <User/>
            <Link to={'/genres'}>Genres</Link>
        </div>
    </div>)
}