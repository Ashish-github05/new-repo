import React from "react";
import { Link } from "react-router-dom";
const UserLogin = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form>
          <h3 className="text-xl mb-2">What's Your Email</h3>
          <input
            required
            className="mb-7 bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 lassName="text-xl mb-2">Enter Password</h3>
          <input
            required
            className="mb-7 mt-2 bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mb-7 mt-3 bg-[#111] text-white rounded px-2 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New Here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/capatin-signup' className="flex justify-center items-center mb-7 mt-3 bg-green-500 text-white rounded px-2 py-2 border w-full text-lg">
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
