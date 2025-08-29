import { createContext, useContext } from "react";
export const TotalPriceContext = createContext(null);

export const TotalPriceDispatchContext = createContext(null);

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalDispatch() {
  return useContext(TotalPriceDispatchContext);
}
