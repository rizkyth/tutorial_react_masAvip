import { useContext } from "react";
import { TotalPriceDispatchContext } from "../context/TotalPriceContext";

export function useTotalDispatch() {
  return useContext(TotalPriceDispatchContext);
}
