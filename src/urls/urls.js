const baseURL = "https://api.themoviedb.org/3/"

const movies="discover/movie"
const genres = "genre/movie/list"
const photoURL=`https://image.tmdb.org/t/p/w500`

const urls={
    movies:movies,
    genres:genres,
    photo:photoURL
}

export {baseURL,urls}