import { useState, useEffect } from "react";

const useProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState({});
  const PRODUCTS_API = process.env.REACT_PRODUCTS_API;

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    const data = await fetch(PRODUCTS_API + "/" + productId);
    const res = await data.json();
    setProductDetails(res);
  };
  return productDetails;
};

export default useProductDetails;
