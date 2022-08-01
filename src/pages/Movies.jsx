import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import Gallery from 'components/Gallery/Gallery';
import { fetchSearchMovie } from '../service/fetchApi';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovie(query).then(res => setItems(res.results));
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={queryParam} />
      <Gallery items={items} />
    </>
  );
}
