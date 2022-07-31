import { Card,WrapImg,Poster, WrapDescription} from "./MovieCard.styled";


const defaultPoster = null;

export default function MovieCard({ poster_path, title, overview }) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  return (
    <Card>
      <WrapImg>
        <Poster src={imageUrl} alt="" />
      </WrapImg>
      <WrapDescription>
        <h2>{title}</h2>
        <p>{overview}</p>
      </WrapDescription>
    </Card>
  );
}
