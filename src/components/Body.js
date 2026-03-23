import { uesState, useState } from "react";
import Cards from "./Cards";
import restaurentData from "../../utils/mockData";
// Body component
const Body = () => {
  let [restaurentList, setrestaurentList] = useState(restaurentData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurentList.filter(
              (restaurent) => restaurent.deliveryTime <= 30,
            );
            setrestaurentList(filteredList);
          }}
        >
          {" "}
          Less delivery time
        </button>
      </div>
      <div className="cardsContainer">
        {restaurentList.map((restaurent) => (
          <Cards key={restaurent.id} restaurentData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
