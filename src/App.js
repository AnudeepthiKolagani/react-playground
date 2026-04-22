import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Products from "./components/Products";
import Error from "./components/Error";

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
    errorElement:<Error/>,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/product/:id", element: <Products /> },
    ],
  },
]);

// Getting root by getElementById()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our app inside root
root.render(<RouterProvider router={appRouter} />);
