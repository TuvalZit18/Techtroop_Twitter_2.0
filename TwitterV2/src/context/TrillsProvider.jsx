import { useReducer, useEffect } from "react";
import {
  TrillsStateContext,
  TrillsDispatchContext,
  trillsReducer,
} from "./trillsContext";
import { getTrills } from "../lib/trills";

const POLL_INTERVAL_MS = 10000; // 10 seconds

export function TrillsProvider({ children }) {
  const [trills, dispatch] = useReducer(trillsReducer, []);

  useEffect(() => {
    function fetchTrills() {
      getTrills()
        .then((data) => dispatch({ type: "SET_TRILLS", payload: data }))
        .catch((err) => console.error("Failed to fetch trills:", err));
    }

    fetchTrills(); // initial fetch on mount

    const intervalId = setInterval(fetchTrills, POLL_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TrillsStateContext.Provider value={trills}>
      <TrillsDispatchContext.Provider value={dispatch}>
        {children}
      </TrillsDispatchContext.Provider>
    </TrillsStateContext.Provider>
  );
}
