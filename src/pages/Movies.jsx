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
    if (!query ||query.trim()==='') {
      return;
    }
    async function fetch() {
      try {
        const response = await fetchSearchMovie(query);
        await setItems(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [query]);
  return (
    <>
      <SearchForm onSubmit={queryParam} />
      {items.length === 0 && query !== null ? (
        <p>Your query did not return any results, please try again!</p>
      ) : (
        <Gallery items={items} />
      )}
    </>
  );
}
