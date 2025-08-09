import { Button } from "../Elements/Button";
import { InputForm } from "../Elements/input";

export const FormRegister = () => {
  return (
    <form>
      <InputForm label="FullName" type="text" placeholder="Jhon Doe" name="fullname" />
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword" />
      <Button type="submit" variant="bg-blue-500">
        Register
      </Button>
    </form>
  );
};
