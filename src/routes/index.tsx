import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainDashboard from "../pages/dashboard";
import MainPage from "../pages/main-page";

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
        element: <div>joaoZIKA</div>
      }
    ],
  },
]);

interface IAppRouter {}

export default function AppRouter({}: IAppRouter) {
  return <RouterProvider router={router}></RouterProvider>;
}
