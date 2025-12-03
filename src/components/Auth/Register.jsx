import { useState } from "react";
import { register } from "../../api/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await register(name, username, email, password);
      console.log(response);
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  return (
    <div className="card">
      <h1 className="card-title">Register</h1>

      <input
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={handleRegister}
      >
        Sign in
      </button>
    </div>
  );
}
