import React from "react";
import ReactDOM from "react-dom/client";

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          width="100px"
          alt="Company logo"
          src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Cards component
const Cards = ({ imageURL, resName, cuisine, rating, deliveryTime }) => {
  return (
    <div className="card">
      <img src={imageURL} alt="food image" className="cardImage" />
      <h4>{resName}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

// List of restuarents to show
const restaurentList = [
  {
    id: 1,
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
    resName: "KFC",
    cuisine: "Burgers, Pizza",
    rating: 4.0,
    deliveryTime: "30 minutes",
  },
  {
    id: 2,
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/24/a23c7e17-cb85-4ede-9596-87278ef3a46c_e8e6ada5-ac4e-4a70-bf3f-3b5f08dad155.jpg",
    resName: "Pista house",
    cuisine: "Biryani, Chicken",
    rating: 4.6,
    deliveryTime: "40 minutes",
  },
  {
    id: 3,
    imageURL: "",
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
    cuisine: "Burgers, Coke",
    rating: 4.2,
    deliveryTime: "32 minutes",
  },
  {
    id: 4,
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
    resName: "KFC",
    cuisine: "Burgers, Pizza",
    rating: 4.0,
    deliveryTime: "30 minutes",
  },
  {
    id: 5,
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
    resName: "KFC",
    cuisine: "Burgers, Pizza",
    rating: 4.0,
    deliveryTime: "30 minutes",
  },
];

// Body component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cardsContainer">
        {restaurentList.map((restaurent) => (
          <Cards
            key={restaurent.id}
            imageURL={restaurent.imageURL}
            resName={restaurent.resName}
            cuisine={restaurent.cuisine}
            rating={restaurent.rating}
            deliveryTime={restaurent.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

// Footer component
const Footer = () => {};

// Layout for our App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// Getting root by getElementById()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our app inside root
root.render(<AppLayout />);
