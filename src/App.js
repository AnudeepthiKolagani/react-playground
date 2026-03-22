import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Layout for our App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

// Getting root by getElementById()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our app inside root
root.render(<AppLayout />);
