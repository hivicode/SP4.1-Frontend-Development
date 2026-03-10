import Link from "next/link";
import { useState } from "react";

import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="bg-orange text-white py-1 text-center small">
        Gratis Ongkir - COD - Promo 11.11
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-orange px-4 py-3 shadow-sm">
        <Link href="/" className="navbar-brand fw-bold fs-3 text-warning">
          Shopee <span className="text-white">Clone</span>
        </Link>

        <form className="d-flex mx-auto w-50" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control search-box"
            placeholder="Cari barang murah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <Link href="/cart" className="nav-link text-white fs-5 position-relative">
          Cart
          <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle rounded-pill">
            {cart.length}
          </span>
        </Link>
      </nav>

      <div className="category-bar py-2 px-4 d-flex gap-3 overflow-auto bg-white shadow-sm">
        <span className="cat-item">Elektronik</span>
        <span className="cat-item">Fashion Pria</span>
        <span className="cat-item">Fashion Wanita</span>
        <span className="cat-item">Otomotif</span>
        <span className="cat-item">Gaming</span>
        <span className="cat-item">Perawatan</span>
        <span className="cat-item">Laptop</span>
      </div>
    </>
  );
}
