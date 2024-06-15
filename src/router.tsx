import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@/pages/not-found";
import SiteLayout from "@/pages/site-layout";
import SiteIndex from "@/pages/site-index";
import About from "@/pages/about";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

import { loader as logoutLoader } from "@/pages/logout";

import AuthWrapper from "@/components/auth-wrapper";
import Dummy from "@/pages/dummy";

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
