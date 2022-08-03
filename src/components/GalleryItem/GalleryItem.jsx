import PropTypes from 'prop-types'
import { Item,ItemImg ,StyledLink} from './Galleryitem.styled';
import {  useLocation } from 'react-router-dom';
import defaultPoster from '../../img/no-poster.jpg';

export default function GalleryItem({ id, title, poster_path}) {
  const location = useLocation()
  
    const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  return (
    <Item>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <ItemImg src={imageUrl} alt={title} />
        <p>{title}</p>
      </StyledLink>
    </Item>
  );
}

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}