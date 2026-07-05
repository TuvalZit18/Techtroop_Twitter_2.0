import { createContext } from "react";

export const TrillsStateContext = createContext();
export const TrillsDispatchContext = createContext();

export function trillsReducer(state, action) {
  switch (action.type) {
    case "SET_TRILLS":
      return action.payload;
    case "ADD_TRILL":
      return [action.payload, ...state];
    default:
      return state;
  }
}
