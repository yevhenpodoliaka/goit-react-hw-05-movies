import { useParams } from "react-router-dom";
export default function MovieDetalis() {
    const { movieId } = useParams();
    return <h2>movie detalis { movieId}</h2>
}