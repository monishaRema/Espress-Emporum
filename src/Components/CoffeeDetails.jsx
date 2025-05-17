import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {

    const coffee = useLoaderData()

  return (
    <div className="py-24">
      <div className="container mx-auto px-5">
         <div className=" py-5">
          <Link
            to={"/"}
            className="flex gap-2 items-center  font-bold text-xl text-primary hover:text-black transition duration-200"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
        <div className="flex gap-10 items-center bg-gray-200 rounded-2xl p-15">
          <div className="img-box max-w-[800px]">
            <img className="max-w-full" src={coffee.photo}></img>
          </div>
          <div className="content-box">
            <h2 className="mb-10 font-bold text-4xl"></h2>
             <p className="text-xl mb-3">
              <span className="font-bold">Name : </span>
              <span>{coffee.name}</span>
            </p>
             <p className="text-xl mb-3">
              <span className="font-bold">SUpplier : </span>
              <span>{coffee.supplier}</span>
            </p>
             <p className="text-xl mb-3">
              <span className="font-bold">Taste : </span>
              <span>{coffee.taste}</span>
            </p>
              <p className="text-xl mb-3">
              <span className="font-bold">Quantity : </span>
              <span>{coffee.quantity}</span>
            </p>
             <p className="text-xl mb-3">
              <span className="font-bold">Price : </span>
              <span>{coffee.price} Taka Per Cup</span>
            </p>
             <p className="text-xl mb-3">
              <span className="font-bold">Details : </span>
              <span>{coffee.details}</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
