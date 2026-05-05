import { useSelector } from "react-redux";

const Cart = () => {
  // Using useSelector hook to get cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart text-center">
      <h1 className="text-2xl font-bold">Cart Items</h1>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="w-6/12">
            {cartItems.map((item) => (
              <div key={item.id} className="border p-4 my-2">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
