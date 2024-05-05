import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import SuperadminLogin from "./pages/Superadmin/SuperadminLogin.tsx";
import SuperadminPage from "./pages/Superadmin/SuperadminPage.tsx";

const router = createBrowserRouter([
  {
    path: "/suplogin",
    element: <SuperadminLogin/>,
  },
  {
    path: "/sup",
    errorElement: <ErrorPage />,
    element: (
     <SuperadminPage/>
    ),
    children: [
      {
        path: "/sup/companylist",
        element: <div>Company List</div>,
      },
      {
        path: "/sup/adminuser",
        element: <div>Admin User</div>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
