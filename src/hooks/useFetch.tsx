import { useEffect, useState } from "react";

const useFetch = <T,>(url: string, initialState: T): [T, boolean] => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: T) => setData(data))
      .finally(() => setLoading(false));
  }, [url]);

  console.log(data);
  return [data, loading];
};

export default useFetch;
