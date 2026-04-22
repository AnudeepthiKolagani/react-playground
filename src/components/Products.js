import { useParams } from "react-router";

const Products = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Products</h2>
      <p>This is the products page.</p>
      <p>Product id: {id}</p>
    </div>
  );
};

export default Products;
