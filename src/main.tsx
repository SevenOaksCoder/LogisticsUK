import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import About from "./Pages/About";
import Drivers from "./Pages/Drivers";
import Vehicles from "./Pages/Vehicles";
import PageNotFound from "./Pages/PageNotFound";
import App from "./Pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
