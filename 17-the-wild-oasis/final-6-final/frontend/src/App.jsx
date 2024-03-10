import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Dashboard, Login } from "./pages";
import AuthContext from "./context/AuthContext.js";
import axios from "./api/axios.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  const handleUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  const isAuthenticated = async () => {
    try {
      const response = await axios.get("/auth", {
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log(response.data);
      handleUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-outfit">
      <AuthContext.Provider value={{ user, handleUser }}>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </AuthContext.Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          className:
            "text-lg bg-blue1/90 text-white2 tracking-wide font-outfit font-medium",
          success: {
            duration: 2000,
          },
        }}
      />
    </div>
  );
};

export default App;
