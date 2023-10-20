import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="container">
        <form onClick={handleSubmit}>
          <h2>Login page</h2>
          <div>
            <label htmlFor="name">
              <span>Name:</span>
            </label>
            <input
              type="text"
              className="input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" enter your name..."
            />
          </div>
          <div>
            <label htmlFor="email">
              <span>Email:</span>
            </label>
            <input
              type="email"
              className="input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" enter your email..."
            />
          </div>
          <button className="btn" type="submit">click</button>
        </form>
        <br />
      </div>
    </div>
  );
}
