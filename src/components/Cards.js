// Cards component
const Cards = ({ imageURL, resName, cuisine, rating, deliveryTime }) => {
  return (
    <div className="card">
      <img src={imageURL} alt="food image" className="cardImage" />
      <h4>{resName}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default Cards;
