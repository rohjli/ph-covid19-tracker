import { useState, useEffect } from "react";
import { cases } from "../api";

export default function useCases() {
  const [data, setData] = useState({
    count: 0,
    results: []
  });

  useEffect(() => {
    (async () => {
      setData(await cases.all());
    })();
  }, []);

  return data;
}
