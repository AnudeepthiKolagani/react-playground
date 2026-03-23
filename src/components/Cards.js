// Cards component
const Cards = ({ restaurentData }) => {
  const { imageURL, resName, cuisine, rating, deliveryTime } = restaurentData;
  return (
    <div className="card">
      <img src={imageURL} alt="food image" className="cardImage" />
      <h4>{resName}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default Cards;
