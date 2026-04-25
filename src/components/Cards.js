import { APP_LOGO } from "../../utils/constants";

// Cards component
const Cards = ({ productData }) => {
  const { title, description, category, rating, tags, images } = productData;
  return (
    <div className="card w-[350px] bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
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
    </div>
  );
};

export default Cards;
