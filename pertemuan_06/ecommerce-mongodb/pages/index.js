import getClientPromise from "@/lib/mongodb";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home({ products, error }) {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {error && (
          <div className="alert alert-danger">{error}</div>
        )}
        <div className="row g-3">
          {products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await getClientPromise();
    const db = client.db("ecommerce");
    const data = await db.collection("products").find({}).toArray();

    const products = data.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return { props: { products, error: null } };
  } catch (err) {
    return { props: { products: [], error: err.message } };
  }
}
