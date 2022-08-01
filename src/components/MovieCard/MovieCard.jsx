import { Card, WrapImg, Poster, WrapDescription ,Title,SubTitle,Text} from './MovieCard.styled';
import  defaultPoster from '../../img/no-poster.jpg';
import { Link ,useLocation} from 'react-router-dom';

export default function MovieCard({
  poster_path,
  title,
  overview,
  genres = [],
}) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  const genersList = genres.map(element => element.name).join(', ');

  const location = useLocation()

  return (
    <Card>
    <Link to={location.state?.from ??'/'}>back</Link>
      <WrapImg>
        <Poster src={imageUrl} alt="" />
      </WrapImg>
      <WrapDescription>
        <Title>{title}</Title>
        <SubTitle> About  </SubTitle>
        <Text>{overview}</Text>
        <SubTitle> Genres  </SubTitle>
        <Text>{genersList}</Text>
      </WrapDescription>
    </Card>
  );
}