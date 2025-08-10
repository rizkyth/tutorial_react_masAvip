import { CardProduct } from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu baru",
    price: "Rp. 1.000.000",
    image: "/images/biji.jpg",
    desc: "biji cabe",
  },
];
export const ProductsPage = () => {
  return (
    <div className="flex justify-center items-center py-5">
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.header img={product.image}></CardProduct.header>
            <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};
