import PropTypes from 'prop-types'
import GalleryItem from "../GalleryItem/GalleryItem";

export default function Gallery({ items }) {
    return <ul>
        {items.map(({ id, title }) => <GalleryItem key={id}
            title={title}
            id={ id} />)}
</ul>
}

Gallery.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object),
}