import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Audio } from "react-loader-spinner";
import authService from "./appwrite/auth";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { login, logout } from "./store/authSlices";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .gotCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
        } else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Audio color="blue" width={500} />;
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 ">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
}

export default App;
