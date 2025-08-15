import { Fragment, useEffect, useRef, useState } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import { Button } from "../components/Elements/Button";
import { getProduct } from "../services/product,service";

import { useLogin } from "../hooks/useLogin";

// const products = [
//   {
//     id: 1,
//     title: "Sepatu baru",
//     price: 100000,
//     image: "/images/biji.jpg",
//     desc: "biji cabe",
//   },
//   {
//     id: 2,
//     title: "Sepatu adudas",
//     price: 200000,
//     image: "/images/biji.jpg",
//     desc: "biji Kelapa",
//   },
//   {
//     id: 3,
//     title: "Sepatu baru",
//     price: 150000,
//     image: "/images/biji.jpg",
//     desc: "biji U",
//   },
// ];

export const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // setProduct(JSON.parse(localStorage.getItem("product")));
  }, []);

  useEffect(() => {
    getProduct((data) => {
      setProduct([...data]);
      localStorage.setItem("product", JSON.stringify(data));
    });
  }, []);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
    // setCart([
    //   ...cart,
    //   {
    //     id: id,
    //     qty: 1,
    //   },
    // ]);
  };

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // // const handleAddToCartRef = (id) => {
  // //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  // //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // // };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });
  return (
    <Fragment>
      <div className="w-full flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-3">
        {username}
        <Button type="button" className="bg-black" variant="bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center items-start py-5">
        <div className="w-4/6 flex flex-wrap ">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.header img={product.image}></CardProduct.header>
                  <CardProduct.Body title={product.title.substring(0, 10)}>{product.description}</CardProduct.Body>
                  <CardProduct.footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-1/4">
          <h1 className="text-2xl font-bold font-blue-600">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
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
                      <td>{product.title}</td>
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
                  <b>$ {totalPrice.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-2">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
