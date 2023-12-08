import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainDashboard from "../pages/dashboard";
import MainPage from "../pages/main-page";
import Page from "../pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <MainDashboard />,
      },
      {
        path: "custumers",
        element: <div>joaoZIKA</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Page />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
