import Cards from "./Cards";
import restaurentList from "../../utils/mockData";
// Body component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cardsContainer">
        {restaurentList.map((restaurent) => (
          <Cards
            key={restaurent.id}
            imageURL={restaurent.imageURL}
            resName={restaurent.resName}
            cuisine={restaurent.cuisine}
            rating={restaurent.rating}
            deliveryTime={restaurent.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
