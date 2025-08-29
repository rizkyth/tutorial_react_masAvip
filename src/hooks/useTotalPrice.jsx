import { useContext } from "react";
import { TotalPriceContext } from "../context/TotalPriceContext";

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}
