import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful 🚀");
      navigate("/dashboard"); // next page (we’ll create)
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#DFF2EB]">
      <div className="bg-white p-8 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gray-700 text-white p-2 rounded"
        >
          Login
        </button>

        <p className="mt-3 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}