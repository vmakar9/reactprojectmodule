import {useEffect, useState} from "react";
import {movieService} from "../../../../services/movie.service";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";

export const Movies=()=>{
    const [movies,setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = searchParams.get('page') || 1;

    const fetchMovies = async (page) => {
        try {
            const { data } = await movieService.getAll(page);
            setMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };

    const totalPages = Math.min(500, movies.total_pages);
    const maxDisplayedPages = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    return(<div>
        <div>
            {movies.results?.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
        <div className={css.Paginationcontainer}>
            <button className={css.Paginationbutton} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous Page
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button className={css.Paginationbutton} key={startPage + index} onClick={() => handlePageChange(startPage + index)}>
                    {startPage + index}
                </button>
            ))}
            <button className={css.Paginationbutton} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next Page
            </button>
        </div>
    </div>)
}