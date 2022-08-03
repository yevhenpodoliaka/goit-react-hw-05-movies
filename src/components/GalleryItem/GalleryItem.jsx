import PropTypes from 'prop-types'
import { Item } from './Galleryitem.styled';
import { NavLink, useLocation } from 'react-router-dom';
export default function GalleryItem({ id, title }) {
    const location = useLocation()
  return (
    <Item>
      <NavLink to={`/movies/${id}`} state={{from:location}}>
        <p>{title}</p>
      </NavLink>
    </Item>
  );
}

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}