import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    profession: "",
    institution: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const {
      fullName,
      email,
      profession,
      institution,
      password,
      confirmPassword,
    } = form;

    if (
      !fullName ||
      !email ||
      !profession ||
      !institution ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save extra user details in Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        fullName,
        email,
        profession,
        institution,
        createdAt: new Date(),
      });

      alert("Registration successful ✅");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#DFF2EB]">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="profession"
          placeholder="Profession (Student / Researcher)"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="institution"
          placeholder="Institution"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
        >
          Register
        </button>

        <p className="mt-3 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}