import React, { useState } from "react";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router";
import Coffee from "./Coffee";

const Home = () => {
  const allCoffee = useLoaderData();

  const [coffees, setCoffees] = useState(allCoffee);

  return (
    <>
      <Banner></Banner>
      <section className="bg-white py-24">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <h3 className="mb-2">--- Sip & Savor ---</h3>
            <h2 className="text-5xl font-bold">Our Popular Coffee</h2>
            <div className="mt-5">
              <Link
                to="/addCoffee"
                className="btn btn-outline btn-primary mb-15"
              >
                Add Coffee
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffees?.map((coffee) => (
              <Coffee
                coffees={coffees}
                setCoffees={setCoffees}
                key={coffee._id}
                coffee={coffee}
              ></Coffee>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
