import { useContext } from "react";
import { TrillsStateContext, TrillsDispatchContext } from "./trillsContext";

export function useTrillsState() {
  const context = useContext(TrillsStateContext);
  if (context === undefined) {
    throw new Error("useTrillsState must be used within a TrillsProvider");
  }
  return context;
}

export function useTrillsDispatch() {
  const context = useContext(TrillsDispatchContext);
  if (context === undefined) {
    throw new Error("useTrillsDispatch must be used within a TrillsProvider");
  }
  return context;
}
