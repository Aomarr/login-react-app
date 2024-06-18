import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../pages/Error/Error";
import Profile from "../pages/profile/Profile";
import WithoutAuth from "./WithoutAuth";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import WithAuth from "./WithAuth";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (          
            <WithoutAuth>
              <Login/>
            </WithoutAuth>
        ),
      },
      {
        path: "/profile",
        element: (
          <WithAuth>
            <Profile></Profile>
          </WithAuth>
        ),
      },
      {
        path: "/login",
        element: (
          <WithoutAuth>
            <Login></Login>
          </WithoutAuth>
        ),
      },
      {
        path: "/signup",
        element: (
          <WithoutAuth>
            <Signup></Signup>
          </WithoutAuth>
        ),
      },
    ],
  },
]);

export default browserRouter;
