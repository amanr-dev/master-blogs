import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import Container from "./container/Container";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, authentication, navigate]);

  return loading ? (
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
  ) : (
    <>{children}</>
  );
};

export default Protected;
