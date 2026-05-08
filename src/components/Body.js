import { useState, useEffect, useContext } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
// Body component
const Body = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredproductsList, setFilteredProductsList] = useState([]);
  const PRODUCTS_API = process.env.REACT_PRODUCTS_API;

  const {loggedInUser, setLoggedInUser} =useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PRODUCTS_API);

    const res = await data.json();
    //Optional chaining
    setProductsList(res?.products);
    setFilteredProductsList(res?.products);
  };

  const handleSearch = () => {
    let filteredData = productsList.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProductsList(filteredData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h2>You are Offline</h2>
        <div>Please check your internet connection and try again !!</div>
      </div>
    );
  }

  if (productsList.length === 0) {
    // Shimmer UI
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex justify-center items-center gap-2 m-4">
        <div className="px-4 py-1 border rounded-lg bg-blue-300 ">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = productsList.filter(
                (product) => product.rating >= 4,
              );
              setProductsList(filteredList);
            }}
          >
            {" "}
            Filter by rating
          </button>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className="searchInput w-96 border border-gray-500 rounded-lg p-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="searchBtn px-2 border border-blue-50 bg-blue-500 text-white rounded-md p-1"
          onClick={handleSearch}
        >
          {" "}
          Search
        </button>

        <div>
          <input
            className="border border-gray-500 rounded-lg p-1"
            placeholder="Enter your name"
            value={loggedInUser}
            onChange={(e) => setLoggedInUser(e.target.value)}
          />
        </div>
      </div>
      <div className="cardsContainer flex flex-wrap gap-2">
        {filteredproductsList.map((product) => (
          <Cards productData={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
