import {useEffect, useState} from "react";
import {movieService} from "../../../services/movie.service";
import {Movie} from "./Movie";

export const Movies=()=>{
    const [movies,setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);


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
        setCurrentPage(newPage);
    };
    const totalPages = Math.min(500, movies.total_pages);
    const maxDisplayedPages = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    return(<div>
        <div>
            {movies.results?.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
        <div className={css.Pagination_container}>
            <button className={css.Pagination_button} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous Page
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button key={startPage + index} onClick={() => handlePageChange(startPage + index)}>
                    {startPage + index}
                </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next Page
            </button>
        </div>
    </div>)
}