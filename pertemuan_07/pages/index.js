import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {products.map((p) => (
            <div className="col-md-4 mb-3" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const base = process.env.BASE_URL || 'http://localhost:3000';
  const res = await fetch(base + '/api/products');
  const products = await res.json();
  return { props: { products } };
}
