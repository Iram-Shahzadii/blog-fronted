import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL; // ✅ Vite style env

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);

      setLoading(true);
      const res = await axios.post(`${API_URL}/users/register`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-pink-200 py-12 mx-auto flex items-center justify-center">
      <div className="w-full bg-white max-w-md p-5 mx-auto py-6 border border-gray-200 shadow-md rounded">
        <h1 className="text-lg font-bold text-center text-gray-700">
          Create your account!
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 mt-5 w-full"
        >
          <input
            onChange={onChangeHandler}
            name="name"
            value={formData.name}
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            onChange={fileHandler}
            accept="image/*"
            type="file"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 text-white px-6 py-2 w-full cursor-pointer rounded hover:bg-orange-700 transition"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-600 cursor-pointer">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
