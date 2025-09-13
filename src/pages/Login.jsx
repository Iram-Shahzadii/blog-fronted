import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { loginUser } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // ✅ API URL from Vite environment
  const API_URL = import.meta.env.VITE_API_URL;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/users/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full bg-pink-200 py-12 mx-auto flex items-center justify-center">
        <div className="w-full bg-white max-w-md p-5 mx-auto py-6 border border-gray-200 shadow-md rounded">
          <h1 className="text-lg font-bold text-center text-gray-700">
            Login into your account!
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-5 mt-5 w-full">
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white px-6 py-2 w-full cursor-pointer rounded hover:bg-orange-700 transition"
            >
              {loading ? "Signing in..." : "Signin"}
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-orange-600 cursor-pointer">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
