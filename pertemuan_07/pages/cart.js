import Navbar from '../components/Navbar';
import { useCart } from '../components/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Cart</h3>
        <div>
          {cart.length === 0 && <p>Cart kosong</p>}
          {cart.map((item, i) => (
            <div key={i} className="mb-2">
              {item.name} - Rp {item.price}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
