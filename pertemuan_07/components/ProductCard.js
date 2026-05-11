import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card p-2">
      {product.image && <img src={product.image} height="200" className="card-img-top" />}
      <div className="card-body">
        <h5>{product.name}</h5>
        <p>Rp {product.price}</p>
        <Link href={`/product/${product._id}`}>
          <a className="btn btn-primary">Detail</a>
        </Link>
      </div>
    </div>
  );
}
