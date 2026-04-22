import { APP_LOGO } from "../../utils/constants";

// Cards component
const Cards = ({ productData }) => {
  const { title, description, category, rating, tags, images } = productData;
  return (
    <div className="card">
      <img src={images?.[0]} alt="product image" className="cardImage" />
      <h4>{title}</h4>
      <h5>{rating}</h5>
      <h4>
        {category} - {tags}
      </h4>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
