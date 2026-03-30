import { useState, useEffect } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";

// Body component
const Body = () => {
  let [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");

    const res = await data.json();
    //Optional chaining
    setProductsList(res?.products);
  };

  if (productsList.length === 0) {
    // Shimmer UI
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
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
        {productsList.map((product) => (
          <Cards key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
