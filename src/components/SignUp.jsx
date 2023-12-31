import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlices";

const SignUp = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          naviagte("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-slate-700 `}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight ">
          Sign up to create an account
        </h2>
        <p className="mt-2 text-center text-base text-slate-700">
          Alrady have an account? &nbsp;
          <Link
            to="/login"
            className="font-medium text-white transition-all duration-200 hover:underline "
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center ">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              {...register("name", { required: true })}
              label="Full Name :"
              placeholder="Full Name"
            />
            <Input
              {...register("email", { required: true })}
              label="Email :"
              placeholder="Enter an Email"
              type="email"
            />
            <Input
              {...register("password", { required: true })}
              label="Password :"
              type="password"
              placeholder="Password"
            />
            <Button type="submit" className="w-full ">
              Create Account{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
