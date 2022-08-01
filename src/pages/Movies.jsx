import { useState ,useEffect} from "react";
import SearchForm from "components/SearchForm/SearchForm";
import Gallery from "components/Gallery/Gallery";
import {fetchSearchMovie} from '../service/fetchApi'

export default function Movies() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([])
    
    useEffect(() => {
        if (query === '') {
            return
        }
        fetchSearchMovie(query).then(res=>setItems(res.results))
    },[query])

    return <div>
        <h1>Movies</h1>
        <SearchForm onSubmit={setQuery} />
        <Gallery items={items}/>
    </div>
    
}