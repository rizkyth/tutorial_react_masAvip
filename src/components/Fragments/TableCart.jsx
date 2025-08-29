import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalDispatch } from "../../context/TotalPriceContext";
import { useTotalPrice } from "../../hooks/useTotalPrice";

export const TabelCart = ({ products }) => {
  const { isDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalDispatch();
  const { total } = useTotalPrice();
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatch]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <table className={`text-left table-auto border-separate  ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((data) => data.id === item.id);
            return (
              <tr key={product.id}>
                <td>{product.title.substring(0, 10)}</td>
                <td> $ {product.price.toLocaleString("id-id", { style: "currency", currency: "USD" })}</td>
                <td>{item.qty}</td>
                <td>$ {(item.qty * product.price).toLocaleString("id-id", { style: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>$ {total.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
