import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
