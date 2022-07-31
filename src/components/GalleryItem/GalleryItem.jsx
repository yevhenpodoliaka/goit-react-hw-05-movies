import { Item } from './Galleryitem.styled'
import {  NavLink } from "react-router-dom";
export default function GalleryItems({ id,title, }) {
    return <Item>
        <NavLink to={`/movie:${id}`}>
            <p >{title}</p>
            </NavLink>
    </Item>
}