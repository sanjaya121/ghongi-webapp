import { useEffect, useState } from "react";
export function useFetch(url) {
  const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  },[]);

  return data;
}
