import React from "react";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  console.log(`User logged = ${authStatus}`);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/sign-up",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <Header>
      Hello header
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="flex ml-auto">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Header>
  );
};

export default Header;
