import { useDispatch } from "react-redux";
import { APP_LOGO } from "../../utils/constants";
import { addItem } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";

// Cards component
const Cards = ({ productData }) => {
  const dispatch = useDispatch();
  const { title, description, category, rating, tags, images } = productData;
  const handleAddToCart = () => {
    // dispatching the addItem action to add the product to the cart in the Redux store
    dispatch(addItem(productData));
  };
  return (
    <div
      data-testid="product-card"
      className="card w-[350px] bg-gray-100 hover:bg-gray-200 rounded-lg p-4"
    >
      <Link to={`/product/${productData.id}`}>
        <img src={images?.[0]} alt="product image" className="cardImage" />
        <h4 className="font-bold text-lg text-blue-600">{title}</h4>
        <div className="flex justify-between mt-2 items-center">
          <h4 className="font-semibold text-md text-gray-700">
            {category} - {tags}
          </h4>
          <button className="font-bold text-black  px-2 rounded-lg text-sm">
            🌟{rating}
          </button>
        </div>
        <p className="text-gray-600 text-sm my-4">{description}</p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <button className="border border-blue-500 text-blue-500 font-bold py-2  rounded-lg w-full ">
          Buy Now
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2  rounded-lg w-full "
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling to parent elements
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
