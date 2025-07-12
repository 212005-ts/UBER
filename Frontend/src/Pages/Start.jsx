import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full  relative">
        {/* Uber Logo - Top Left */}
        <div className=" absolute top-0 left-0 pt-8">
          <img
            className="w-16 ml-8"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png"
            alt="Uber Logo"
          />
        </div>

        {/* Get Started & Button - Bottom Left */}
        <div className="bg-white absolute bottom-0 left-0 bb-7 py-4 px-4 w-full">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className=" flex ite ms-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
