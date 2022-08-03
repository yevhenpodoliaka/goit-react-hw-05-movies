import PropTypes from 'prop-types';
import defaultPoster from '../../img/no-poster.jpg';
import { Item, CastImg, CastTitle, CastText } from './Cast.styled';

export default function CastItem({ character, name, profile_path }) {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : `${defaultPoster}`;
  return (
    <Item>
      <CastImg src={imageUrl} alt={name} />
      <CastTitle>name:{name}</CastTitle>
      <CastText>character: {character}</CastText>
    </Item>
  );
}

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
