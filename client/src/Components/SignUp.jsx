import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";

const SignUp = () => {

    const {createUser} = use(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const email = formData.get('email')
        const pass = formData.get('password')


        createUser(email, pass)
        .then(res => console.log(res.user))
        .catch(err => console.log(err.message))
    }
  return (

 <div className="container mx-auto px-5 py-20">

    <form className="fieldset bg-gray-200 rounded-box w-xs px-5 py-8  mx-auto" onSubmit={handleSignUp}>
      <legend className="text-3xl font-bold text-center mb-3">Sign Up</legend>

      <label className="label">Email</label>
      <input type="email" name="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" name="password" className="input" placeholder="Password" />

      <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUp;
