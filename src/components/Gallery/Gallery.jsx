import PropTypes from 'prop-types'
import GalleryItem from "../GalleryItem/GalleryItem";
import {Gallerylist}from './Gallery.styled'

export default function Gallery({ items }) {
    return <Gallerylist>
        {items.map(({ id, title, poster_path }) => <GalleryItem key={id}
            title={title}
            id={id}
            poster_path={ poster_path} />)}
</Gallerylist>
}

Gallery.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object),
}