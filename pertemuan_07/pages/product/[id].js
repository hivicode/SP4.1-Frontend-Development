import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

export default function ProductDetail({ product }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>{product.name}</h3>
        <p>Rp {product.price}</p>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const base = process.env.BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${base}/api/products/${params.id}`);
  const product = await res.json();
  return { props: { product } };
}
