import { useState, useEffect } from "react";
import { cases } from "../api";

export default function useTestCount() {
  const [count, setCount] = useState({
    negative: 0,
    pending: 0
  });

  useEffect(() => {
    cases.tests().then(({ negative, pending }) => {
      setCount(state => ({
        ...state,
        negative,
        pending
      }));
    });
  }, []);

  return count;
}
