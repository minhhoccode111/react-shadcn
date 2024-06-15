import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@p/not-found";
import SiteLayout from "@p/site-layout";
import SiteIndex from "@p/site-index";
import About from "@p/about";
import Login from "@p/login";
import Signup from "@p/signup";

import { loader as logoutLoader } from "@p/logout";

import AuthWrapper from "@c/auth-wrapper";
import Dummy from "@p/dummy";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SiteLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <SiteIndex />,
        },

        {
          path: "dummy",
          element: (
            <AuthWrapper>
              <Dummy />
            </AuthWrapper>
          ),
        },

        {
          path: "login",
          element: <Login />,
        },

        {
          path: "logout",
          loader: logoutLoader,
        },

        {
          path: "signup",
          element: <Signup />,
        },

        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
