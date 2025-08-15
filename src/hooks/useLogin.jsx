import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [gesUsername, setGetUsername] = useState("");
  useEffect(() => {
    // getUsername(token);
    const token = localStorage.getItem("token");
    if (token) {
      setGetUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return gesUsername;
};
