import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main/Main";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import AllTasks from "../pages/Dashboard/AllTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <AllTasks />,
      },
    ],
  },
]);
