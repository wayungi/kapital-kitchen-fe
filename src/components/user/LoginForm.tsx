import { useState, ChangeEvent, FormEvent } from "react";
import { userLogin } from "./UserSlice";
import { Credentials } from "../../custom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  
  const isUndefinedOrBlank = Object.values(credentials).some((value) => value === "")
 
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUndefinedOrBlank) return;
    userLogin(credentials);
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <h1>Login From</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCredentials({...credentials, [e.target.name]: e.target.value })}
          value={credentials.username}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>setCredentials({...credentials, [e.target.name]:e.target.value})}
          value={credentials.password}
        />
        <br />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
