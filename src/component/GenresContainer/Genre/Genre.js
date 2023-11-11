import {useNavigate} from "react-router-dom";
import css from "./Genre.module.css"
export const Genre=({genre})=>{
    const {id,name} = genre
    const navigate = useNavigate();
    return(<div className={css.GenreBlock}>
        <div  onClick={()=>navigate(`${id}`)}>
            <h4 className={css.GenreName}>{name}</h4>
        </div>
    </div>)
}