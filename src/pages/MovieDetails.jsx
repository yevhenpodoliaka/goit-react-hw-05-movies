import { useState, useEffect} from "react";
import { useParams,NavLink } from "react-router-dom";
import { fetchMovieById } from "service/fetchApi";
import MovieCard from "components/MovieCard/MovieCard";


export default  function MovieDetalis() {
const[data,setData]=useState({})
    const { movieId } = useParams();
    useEffect(() => {
        fetchMovieById(movieId.slice(1, 10)).then(setData)
    },[movieId])
console.log(data);
    return<div>
        <MovieCard poster_path={data.poster_path}
                    title={data.title}
                    overview={data.overview}
        />
        <NavLink to=":movieId/cast">cast</NavLink>
        <NavLink to=":movieId/reviews">reviews</NavLink>
        </div>
}