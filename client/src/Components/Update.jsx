import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="add-coffee py-24">
      <div className="container mx-auto px-5">
        <div className="add-coffee-content  bg-gray-100 p-24 text-gray-800">
          <h2 className="text-center text-5xl font-semibold mb-8">
            Update Coffee
          </h2>
          <p className="max-w-[930px] mx-auto text-center text-lg mb-10">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleUpdate} className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="field w-full">
                <label className="mb-1 block" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={coffee.name}
                  placeholder="Enter coffee name"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>
              <div className="field w-full ">
                <label className="mb-1 block" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={coffee.quantity}
                  placeholder="Enter coffee quantity"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>

              <div className="field w-full">
                <label className="mb-1 block" htmlFor="supplier">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={coffee.supplier}
                  placeholder="Enter coffee supplier"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>
              <div className="field w-full ">
                <label className="mb-1 block" htmlFor="taste">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={coffee.taste}
                  placeholder="Enter coffee taste"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>

              <div className="field w-full">
                <label className="mb-1 block" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={coffee.price}
                  placeholder="Enter coffee price"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>
              <div className="field w-full ">
                <label className="mb-1 block" htmlFor="details">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={coffee.details}
                  placeholder="Enter coffee details"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>

              <div className="field w-full col-span-2">
                <label className="mb-1 block" htmlFor="photo">
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={coffee.photo}
                  placeholder="Enter photo URL"
                  className="input block w-full bg-white text-gray-700"
                />
              </div>
              <div className="field w-full col-span-2">
                <button
                  type="submit"
                  className="btn btn-outline btn-primary w-full"
                >
                  Update Coffee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
