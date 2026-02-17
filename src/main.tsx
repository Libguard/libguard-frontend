import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "./pages/auth/register/page";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
