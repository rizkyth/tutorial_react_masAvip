import { FormRegister } from "../components/Fragments/FromRegister";
import { AuthLayout } from "../components/Layouts/AuthLayouts";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
