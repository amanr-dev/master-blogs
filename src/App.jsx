import { Outlet } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Audio } from "react-loader-spinner";
import authService from "./appwrite/auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { login, logout } from "./store/authSlices";
import Container from "./components/container/Container";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .gotCurrentUser()
  //     .then((user) => {
  //       if (user) {
  //         dispatch(login({ user }));
  //       } else dispatch(logout());
  //     })
  //     .finally(() => setLoading(false));
  // }, [dispatch]);

  // console.log(loading);

  if (loading) {
    return (
      <div className="w-full  py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-center flex-col mt-[20%]">
            <Audio
              className="mx-auto"
              ariaLabel="loader"
              color="blue"
              width={200}
            />
            <span className="text-xl text-slate-500 ">Loading...</span>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 ">
      {/* <div className="w-full block">
         <Header /> 
         Hello to header 
      </div> */}
      <Container>
        <Outlet />
      </Container>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
}

export default App;
