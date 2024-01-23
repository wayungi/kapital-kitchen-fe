import { useState, ChangeEvent, FormEvent } from "react";
import { userLogin } from "./UserSlice";
import { Credentials } from "../../custom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  // const [username, setUsername] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const isUndefinedOrBlank = [username, password].some(
  //   (element) => element === ""
  // );

  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (isUndefinedOrBlank) return;
    // userLogin({ username, password });
  };

  return (
    <form>
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
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
