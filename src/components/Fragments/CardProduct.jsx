import { Link } from "react-router-dom";
import { Button } from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice";

export const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-gray-600 border-gray-200 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">{children}</div>
    </>
  );
};
const HeaderCard = ({ img, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img src={img} alt="product" className="p-8 rounded-t-lg h-80 w-full object-center" />
    </Link>
  );
};
const BodyCard = ({ children, title }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};
const FooterCard = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-between px-5 pb-3">
      <span className="text-sm font-bold text-white pb-3">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <Button type="button" variant="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to Cart
      </Button>
    </div>
  );
};
CardProduct.header = HeaderCard;
CardProduct.Body = BodyCard;
CardProduct.footer = FooterCard;
