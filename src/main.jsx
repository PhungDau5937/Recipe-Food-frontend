import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/Category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";
import SingleProduct from "./pages/Products/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`https://recipe-food-backend.vercel.app//api/items/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
