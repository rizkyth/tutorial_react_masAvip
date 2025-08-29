import { useReducer } from "react";
import { TotalPriceContext, TotalPriceDispatchContext } from "./TotalPriceContext";

function totalPriceReducer(state, action) {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default:
      throw Error("Uknown action: " + action.type);
  }
}

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}
