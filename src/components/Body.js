import { useState, useEffect } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

// Body component
const Body = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredproductsList, setFilteredProductsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");

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
