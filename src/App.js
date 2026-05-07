import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Error from "./components/Error";
import AboutClass from "./components/AboutClass";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

// Lazy loading Food component
const Food = lazy(() => import("./components/Food"));
// Layout for our App
const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Provider store={store}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </Provider>
    </UserContext.Provider>
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
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> }
    ],
  },
]);

// Getting root by getElementById()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our app inside root
root.render(<RouterProvider router={appRouter} />);
