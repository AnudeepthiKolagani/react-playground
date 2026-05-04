import { useParams } from "react-router";
import useProductDetails from "../../utils/useProductDetails";
import { useEffect, useState } from "react";
import ReviewAccordion from "./ReviewAccordion";

const Products = () => {
  const { productId } = useParams();
  const [productReviews, setProductReviews] = useState([]);
  const [showAccordion, setShowAccordion] = useState(null);

  const productDetails = useProductDetails(productId);

  const { title, brand, price, rating, description, images, reviews } = productDetails;

  useEffect(() => {
    // Fetch product reviews when component mounts
    setProductReviews(productDetails.reviews);
  }, [productDetails.reviews]);

  // Created custom hook to fetch product details based on the productId from the URL parameters

  return (
    <div className="product-details  w-[700px] mx-auto flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-72 h-72">
        <img src={images?.[0]} alt={title} className="cardImage object-cover" />
      </div>
      <div className="flex gap-4 justify-between items-center ">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm font-bold">${price}</p>
      </div>
      <p className="font-semibold">Brand: {brand}</p>
      <h4 className="font-bold text-sm">Rating: {rating} stars</h4>

      <p className="text-gray-600">{description}</p>
      <h4 className="font-bold text-lg">Reviews</h4>

      <div className="w-full flex flex-col gap-4">
        {productReviews &&
          productReviews.length &&
          productReviews.map((review, index) => (
            <div
              className="w-full border-gray-400 shadow-lg mb-4"
              key={index}
              onClick={() => setShowAccordion(index === showAccordion ? null : index)}
            >
              <ReviewAccordion review={review} showAccordion={index === showAccordion } />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
