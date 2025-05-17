import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const filter = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(filter);
            }
          });
      }
    });
  };
  return (
    <div className="bg-gray-200 rounded-xl p-15 flex justify-between items-center">
      <div className="img-box mx-w-[450px]">
        <img className="max-w-full" src={coffee.photo}></img>
      </div>
      <div className="content">
        <p className="text-xl mb-2">
          <span className="font-bold">Name : </span>
          <span>{coffee.name}</span>
        </p>
        <p className="text-xl mb-2">
          <span className="font-bold">Supplier : </span>
          <span>{coffee.supplier}</span>
        </p>
        <p className="text-xl ">
          <span className="font-bold">Price : </span>
          <span>
            {coffee.price}
            Taka Per Cup
          </span>
        </p>
      </div>
      <div className="btn-box flex flex-col gap-6">
        <Link to={`/coffee-details/${coffee._id}`} className="btn btn-success">
          View
        </Link>
        <Link to={`/update/${coffee._id}`} className="btn btn-secondary">
          Edit
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="btn btn-warning"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Coffee;
