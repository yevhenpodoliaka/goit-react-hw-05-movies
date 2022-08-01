import { useState ,useEffect} from "react";
import SearchForm from "components/SearchForm/SearchForm";
import Gallery from "components/Gallery/Gallery";
import {fetchSearchMovie} from '../service/fetchApi'
import { Outlet,useParams } from "react-router-dom";

export default function Movies() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([])

    const { movieId } = useParams()
    
    useEffect(() => {
        if (query === '') {
            return
        }
        fetchSearchMovie(query).then(res=>setItems(res.results))
    },[query])

    return <>
        {!movieId && <SearchForm onSubmit={setQuery} />}
        {!movieId &&<Gallery items={items} />}
        <Outlet/>
    </>
    
}