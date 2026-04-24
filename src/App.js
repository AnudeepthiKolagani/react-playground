import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Products from "./components/Products";
import Error from "./components/Error";
import AboutClass from "./components/AboutClass";

// Lazy loading Food component
const Food = lazy(() => import("./components/Food"));

// Layout for our App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass name={"Parent class"} /> },
      { path: "/product/:productId", element: <Products /> },
      {
        path: "/food",
        element: (
          <Suspense fallback={<h2>Loading ...</h2>}>
            <Food />
          </Suspense>
        ),
      },
    ],
  },
]);

// Getting root by getElementById()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our app inside root
root.render(<RouterProvider router={appRouter} />);
