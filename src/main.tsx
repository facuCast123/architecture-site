import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Certifications from "./pages/Certifications";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <Project />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
