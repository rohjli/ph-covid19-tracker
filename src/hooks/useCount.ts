import { useState, useEffect } from "react";
import { cases } from "../api";

export default function useCount() {
  const [count, setCount] = useState({
    confirmed: 0,
    negative: 0,
    pending: 0
  });

  useEffect(() => {
    cases.tests().then(({ confirmed, negative, pending }) => {
      setCount({
        confirmed,
        negative,
        pending
      });
    });
  }, []);

  return count;
}
