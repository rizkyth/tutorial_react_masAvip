import { useEffect, useRef, useState } from "react";
import { Button } from "../Elements/Button";
import { InputForm } from "../Elements/input";
import { login } from "../../services/auth.service";

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="Jhon Doe ..." ref={usernameRef} />
      <InputForm label="Password" name="password" type="password" placeholder="*******" />
      <Button type="submit" variant="bg-blue-500">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center text-sm mt-3">{loginFailed}</p>}
    </form>
  );
};
