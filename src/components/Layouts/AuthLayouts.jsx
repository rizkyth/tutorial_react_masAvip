import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="text-xl font-bold mb-2">
          <h1 className="text-2xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
          {children}
          <Navigation type={type} title={title} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type, title }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          {title}
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          {title}
        </Link>
      </p>
    );
  }
};
