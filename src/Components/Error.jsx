import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import ErrImg from "../assets/404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="text-center py-5">
          <Link
            to={"/"}
            className="flex gap-2 items-center justify-center font-bold text-xl text-primary hover:text-black transition duration-200"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>

        <img src={ErrImg} alt="" className="max-w-full" />
      </div>
    </section>
  );
};

export default Error;
