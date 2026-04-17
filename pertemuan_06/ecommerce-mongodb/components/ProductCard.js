import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card p-2 h-100">
      <Image
        src={product.image || "https://via.placeholder.com/300x200?text=Product"}
        alt={product.name}
        width={300}
        height={200}
        className="w-100"
        style={{ height: "200px", objectFit: "cover" }}
        unoptimized
      />
      <h5 className="mt-3">{product.name}</h5>
      <p>Rp {product.price}</p>
      <div className="d-flex gap-2">
        <Link href={`/product/${product._id}`} className="btn btn-primary">
          Detail
        </Link>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => addToCart(product)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
