import { useState } from "react";
import { login } from "../../api/auth";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(user, password);
      console.log(response);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="card">
      <h1 className="card-title">Login</h1>

      <input
        className="input"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-full"
        onClick={handleLogin}
      >
        Log in
      </button>
    </div>
  );
}
