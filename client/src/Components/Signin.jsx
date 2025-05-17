import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContex';
import Swal from 'sweetalert2';

const Signin = () => {

    const {singnIn} = use(AuthContext)


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(email && password){
            singnIn(email, password)
            .then( (result) => {

                console.log(result)

                const userInfo = {
                    email,
                    lastSignInTime:result.user?.metadata?.lastSignInTime
                }

                fetch('http://localhost:3000/users',{
                    method:'PATCH',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userInfo)
                    
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                })
                e.target.reset();

                Swal.fire({
                      title: "You have successfully signed in",
                      icon: "success",
                      showCancelButton: false,
                      timer: 1500
                })
            })
            .catch(err => console.log(err.message))
        }

    }
    return (
         <div className="container mx-auto px-5 py-20">
      <form
        className="fieldset bg-gray-200 rounded-box w-xs px-5 py-8  mx-auto"
        onSubmit={handleSignIn}
      >
        <legend className="text-3xl font-bold text-center mb-3">Sign In</legend>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />




        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Sign In
        </button>
      </form>
    </div>
    );
};

export default Signin;