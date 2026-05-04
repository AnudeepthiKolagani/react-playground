import Cards from "./Cards";

const HigherOrder = ({productData}) => {
  return (
    <div>
      <div>Promoted</div>
      <Cards  productData={productData}/>
    </div>
  );
};

export default HigherOrder;
