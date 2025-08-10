import { Button } from "../Elements/Button";
import { InputForm } from "../Elements/input";

export const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
      <InputForm label="Password" name="password" type="password" placeholder="*******" />
      <Button type="submit" variant="bg-blue-500">
        Login
      </Button>
    </form>
  );
};
