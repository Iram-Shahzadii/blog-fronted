import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);

  // ✅ Vite env variable
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blog/all`);
        if (res.data.success) {
          setBlogData(res.data.blogs);
        }
      } catch (error) {
        console.log("❌ Error in all blogs API:", error);
      }
    };
    allBlogs();
  }, [API_URL]);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const contextValue = {
    blogData,
    user,
    loginUser,
    logoutUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
