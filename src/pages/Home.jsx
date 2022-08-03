import { useState, useEffect } from 'react';
import { fetchTranding } from 'service/fetchApi';
import Gallery from 'components/Gallery/Gallery';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchTranding();
        await setItems(response.results);
      } catch (error) {}
    }
    fetch();
  }, []);
  return (
    <>
      <Gallery items={items} />
    </>
  );
}
