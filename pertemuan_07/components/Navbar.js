import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">MyShop</a>
        </Link>
        <Link href="/cart">
          <a className="btn btn-light">Cart ({cart.length})</a>
        </Link>
      </div>
    </nav>
  );
}
