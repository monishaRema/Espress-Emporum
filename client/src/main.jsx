import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

import Root from "./Layout/Root.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import Update from "./Components/Update.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import SignUp from "./Components/SignUp.jsx";
import Signin from "./Components/Signin.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/coffee-details/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:CoffeeDetails
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/update/:id",
        loader:({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: Update,
      },
      {
        path:'/signUp',
        Component:SignUp
      },
      {
        path:'/signIn',
        Component:Signin
      }, 
      {
        path: '/*',
        Component:Error
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
