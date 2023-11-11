import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./component/MainLayout/MainLayout";
import {Movies} from "./component/MoviesContainer/MoviesCard/Movies/Movies";
import {MovieDetails} from "./component/MoviesContainer/MoviesDetails/MovieDetails";
import {Genres} from "./component/GenresContainer/Genres/Genres";
import {MoviesByGenre} from "./component/MovieByGenre/MoviesByGenre/MoviesByGenre";

export const router= createBrowserRouter([{
    path:'',element:<MainLayout/>,children:[
        {index:true,element:<Navigate to={'movies'}/>},
        {path:'movies',element:<Movies/>},
        {path:'movies/:id',element:<MovieDetails/>},
        {path:'genres',element:<Genres/>},
        {path:'genres/:id',element:<MoviesByGenre/>}
    ]
}])