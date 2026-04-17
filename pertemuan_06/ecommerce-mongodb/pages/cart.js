import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, clearCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={`${item._id}-${index}`}>
                {item.name} - Rp {item.price}
              </div>
            ))}
            <button type="button" className="btn btn-danger mt-3" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
}
