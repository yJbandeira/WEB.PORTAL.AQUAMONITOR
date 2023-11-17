import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

interface IAppRouter {}

export default function AppRouter({}: IAppRouter) {
  return <RouterProvider router={router}></RouterProvider>;
}
