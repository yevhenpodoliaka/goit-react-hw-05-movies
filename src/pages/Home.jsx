import {useState, useEffect } from "react"
import { fetchTranding } from "service/fetchApi"
import Gallery from "components/Gallery/Gallery"
export default function Home() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetchTranding().then(res=>setItems(res.results))
    },[])
    return <>
        <Gallery items={items} />
    </>
   
}