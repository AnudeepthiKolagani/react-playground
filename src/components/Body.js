import { useState, useEffect } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import dotenv from "dotenv";
import useOnlineStatus from "../../utils/useOnlineStatus";
// Body component
const Body = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredproductsList, setFilteredProductsList] = useState([]);
  const PRODUCTS_API = process.env.REACT_PRODUCTS_API;

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

  const onlineStatus = useOnlineStatus()

  if(onlineStatus === false){
    return <div>
      <h2>You are Offline</h2>
      <div>Please check your internet connection and try again !!</div>
    </div>
  }

  if (productsList.length === 0) {
    // Shimmer UI
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search products..."
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchBtn" onClick={handleSearch}>
          {" "}
          Search
        </button>
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
      <div className="cardsContainer">
        {filteredproductsList.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Cards productData={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
