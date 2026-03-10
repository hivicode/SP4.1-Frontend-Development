import Image from "next/image";
import { useRouter } from "next/router";

import { useCart } from "../../contexts/CartContext";

const DATA = {
  1: { id: 1, name: "Smartphone X1", price: 2500000, desc: "Smartphone generasi terbaru", image: "/images/p1.jpg" },
  2: { id: 2, name: "Jaket Hoodie Premium", price: 150000, desc: "Hoodie nyaman dan tebal", image: "/images/p2.jpg" },
  3: { id: 3, name: "Gaming Headset RGB", price: 300000, desc: "Suara jernih, bass mantap", image: "/images/p3.jpg" },
  4: { id: 4, name: "Kacamata Anti Radiasi", price: 50000, desc: "Aman untuk mata", image: "/images/p4.jpg" },
};

export default function Detail() {
  const { addToCart } = useCart();
  const { id } = useRouter().query;

  const product = DATA[id];

  if (!product) {
    return <h1 className="container mt-4">Loading...</h1>;
  }

  return (
    <div className="container mt-4">
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <Image src={product.image} className="img-fluid rounded shadow w-100" alt={product.name} width={700} height={700} />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <h3 className="text-orange fw-bold">Rp {product.price.toLocaleString()}</h3>
          <p className="mt-3">{product.desc}</p>

          <button className="btn btn-orange w-50 mt-3" onClick={() => addToCart(product)}>
            + Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
