import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./pages/Home";
import About from "./pages/About";
import AppLayout, { loader } from "./Layout/AppLayout";
import PrivateLayout from "./Layout/PrivateLayout";
import Info from "./pages/Info";

export const routes = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <AppLayout />,
    loader: loader,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        ErrorBoundary: () => <div>Error here</div>,
      },
      {
        path: "/",
        element: <PrivateLayout />,
        // loader: loader,
        children: [
          { index: true, path: "/about", element: <About /> },
          { path: "/info", element: <Info /> },
        ],
      },
    ],
  },
]);
