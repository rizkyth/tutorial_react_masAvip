import { Button } from "../Elements/Button";

export const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-gray-600 border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between">{children}</div>
    </>
  );
};
const HeaderCard = ({ img }) => {
  return (
    <a href="#">
      <img src={img} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};
const BodyCard = ({ children, title }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};
const FooterCard = ({ price }) => {
  return (
    <div className="flex flex-col items-center justify-between px-5 pb-3">
      <span className="text-sm font-bold text-white pb-3">{price}</span>
      <Button type="button" variant="bg-blue-600">
        Add to Cart
      </Button>
    </div>
  );
};
CardProduct.header = HeaderCard;
CardProduct.Body = BodyCard;
CardProduct.footer = FooterCard;
