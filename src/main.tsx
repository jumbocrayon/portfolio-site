import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Workbench from "@/pages/Workbench";
import ExperimentPage from "@/pages/ExperimentPage";
import About from "@/pages/About";
import DevBlog from "@/pages/DevBlog";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Workbench /> },
      { path: "experiment/:slug", element: <ExperimentPage /> },
      { path: "about", element: <About /> },
      { path: "dev-blog", element: <DevBlog /> }, // stub only
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
