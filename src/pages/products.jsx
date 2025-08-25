import { Fragment, useContext, useEffect, useState } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";

import { useLogin } from "../hooks/useLogin";
import { getProducts } from "../services/product.service";
import { TabelCart } from "../components/Fragments/TableCart";
import { Navbar } from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

export const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  const { isDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProduct([...data]);
      localStorage.setItem("product", JSON.stringify(data));
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center items-start py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className=" w-4/6 sm:w-3/6 flex flex-wrap ">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.header img={product.image} id={product.id}></CardProduct.header>
                  <CardProduct.Body title={product.title.substring(0, 10)}>{product.description}</CardProduct.Body>
                  <CardProduct.footer price={product.price} id={product.id} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-1/4">
          <h1 className="text-2xl font-bold font-blue-600">Cart</h1>
          <TabelCart products={products}></TabelCart>
        </div>
      </div>
      {/* <div className="mt-2">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
