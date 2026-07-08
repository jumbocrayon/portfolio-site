import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "@/pages/About";
import Workbench from "@/pages/Workbench";
import ExperimentPage from "@/pages/ExperimentPage";
import HowIPlay from "@/pages/HowIPlay";
import DevBlog from "@/pages/DevBlog";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // About is the front door: the story that argues the thesis first.
      { index: true, element: <About /> },
      // The Workbench (living-testbed board) is the proof, one click away.
      { path: "workbench", element: <Workbench /> },
      { path: "experiment/:slug", element: <ExperimentPage /> },
      { path: "how-i-play", element: <HowIPlay /> },
      { path: "dev-blog", element: <DevBlog /> }, // stub only
      // Legacy path: About used to live here. Keep links working.
      { path: "about", element: <Navigate to="/" replace /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
