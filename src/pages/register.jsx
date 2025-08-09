import { Link } from "react-router-dom";
import { FormRegister } from "../components/Fragments/FromRegister";
import { AuthLayout } from "../components/Layouts/AuthLayouts";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};
