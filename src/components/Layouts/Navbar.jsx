import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../hooks/useTotalPrice";

export const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="w-full flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-3">
      {username}
      <Button type="button" className="bg-black" variant="bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">
        item : {totalCart} | Price : $ {total}
      </div>
      <Button variant="bg-black" className="px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "light" : "Dark"}
      </Button>
    </div>
  );
};
