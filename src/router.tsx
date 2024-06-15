import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@/pages/404";
import Layout from "@/pages/layout";
import Index from "@/pages/index";
import About from "@/pages/about";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import { loader as logoutLoader } from "@/pages/logout";

import FakebookLayout, {
  fakebookNavigateToFeed,
} from "@/pages/fakebook/fakebook-layout";
import {
  profileNavigateToUserid,
  useridNavigateToInfo,
} from "@/pages/fakebook/profile-navigate";
import FakebookFeed from "@/pages/fakebook/fakebook-feed";
import ProfileLayout from "@/pages/fakebook/profile-layout";

import UserInfo from "@/pages/fakebook/user-info";
import UserPosts from "@/pages/fakebook/user-posts";
import UserLayout from "@/pages/fakebook/user-layout";
import UserConnections from "@/pages/fakebook/user-connections";

import ChatMessing from "@/pages/messing/chat-messing";
import IndexMessing from "@/pages/messing/index-messing";
import LayoutMessing from "@/pages/messing/layout-messing";

import ProtectedRoute from "@/components/protected-route";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Index />,
          // loader: goToAbout?
        },

        {
          path: "fakebook",
          element: (
            // authentication wrapper
            <ProtectedRoute>
              <FakebookLayout />
            </ProtectedRoute>
          ),
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              // /fakebook go to /feed by default
              loader: fakebookNavigateToFeed,
            },

            {
              path: "feed",
              element: <FakebookFeed />,
            },

            {
              path: "profile",
              element: <ProfileLayout />, // just a simple Outlet
              errorElement: <NotFound />,
              children: [
                {
                  index: true,
                  // /profile go to /:userid by default
                  loader: profileNavigateToUserid,
                },

                {
                  path: ":userid",
                  // layout and check :userid existed
                  element: <UserLayout />,
                  children: [
                    {
                      index: true,
                      // /:userid go to /info by default
                      loader: useridNavigateToInfo,
                    },

                    {
                      path: "info",
                      element: <UserInfo />,
                    },

                    {
                      path: "posts",
                      element: <UserPosts />,
                    },

                    {
                      path: "connections",
                      element: <UserConnections />,
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          path: "messing",
          element: (
            // authentication wrapper
            <ProtectedRoute>
              <LayoutMessing />
            </ProtectedRoute>
          ),
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              errorElement: <NotFound />,
              element: <IndexMessing />,
            },

            {
              path: "users/:userid",
              element: <ChatMessing />,
            },

            {
              path: "groups/:groupid",
              element: <ChatMessing />,
            },
          ],
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
