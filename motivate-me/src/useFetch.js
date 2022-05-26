//Custom hook to fetch data from API
import { useEffect, useState } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri)
      fetch(uri)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
  }, [uri]);

  return { loading, data, error };
}
