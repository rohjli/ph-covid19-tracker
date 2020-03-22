import { useState, useEffect } from "react";
import { cases } from "../api";

export default function useData() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState({
    confirmed: 0,
    died: 0,
    recovered: 0
  });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      (async () => {
        const data = await cases.all();

        setData(data.results);
        setCount(state => ({ ...state, ...data.total }));
      })();
    }

    return () => {
      mounted = false;
    };
  }, []);

  return {
    data,
    count
  };
}
