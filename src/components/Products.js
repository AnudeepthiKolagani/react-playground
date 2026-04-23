import { useParams } from "react-router";
import useProductDetails from "../../utils/useProductDetails";

const Products = () => {
  const { productId } = useParams();

  // Created custom hook to fetch product details based on the productId from the URL parameters
  const productDetails = useProductDetails(productId);

  const { title, brand, price, rating, description, images } = productDetails;

  return (
    <div className="product-details">
      <h2>Products</h2>
      <h4>Product id: {productId}</h4>
      <img src={images?.[0]} alt={title} className="cardImage" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
      <h4>Rating: {rating} stars</h4>
    </div>
  );
};

export default Products;
