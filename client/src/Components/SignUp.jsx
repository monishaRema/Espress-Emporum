import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
            const userProfile = {
                ...restFormData,
                email,
                creationTime : result?.user?.metadata?.creationTime,
                lastSignInTime : result?.user?.metadata?.lastSignInTime,
            }


          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container mx-auto px-5 py-20">
      <form
        className="fieldset bg-gray-200 rounded-box w-xs px-5 py-8  mx-auto"
        onSubmit={handleSignUp}
      >
        <legend className="text-3xl font-bold text-center mb-3">Sign Up</legend>

        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="name" />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Address</label>
        <input
          type="text"
          name="address"
          className="input"
          placeholder="address"
        />

        <label className="label">Phone</label>
        <input type="text" name="phone" className="input" placeholder="phone" />

        <label className="label">Photo</label>
        <input
          type="text"
          name="photo"
          className="input"
          placeholder="photo url"
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
