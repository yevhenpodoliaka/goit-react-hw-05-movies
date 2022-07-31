import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
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
        <h2> movie detalis {movieId}</h2>
        <MovieCard poster_path={data.poster_path}
                    title={data.title}
                    overview={data.overview}
        />
        </div>
}