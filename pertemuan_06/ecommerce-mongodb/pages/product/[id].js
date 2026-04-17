import { ObjectId } from "mongodb";
import Link from "next/link";
import Image from "next/image";
import getClientPromise from "@/lib/mongodb";
import Navbar from "@/components/Navbar";

export default function ProductDetail({ product }) {
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <h3>Product not found</h3>
          <Link href="/" className="btn btn-secondary mt-3">
            Back
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>{product.name}</h3>
        <Image
          src={product.image || "https://via.placeholder.com/600x300?text=Product"}
          alt={product.name}
          width={600}
          height={350}
          className="img-fluid mb-3"
          style={{ maxHeight: "350px", objectFit: "cover" }}
          unoptimized
        />
        <p>{product.description || "No description available."}</p>
        <h5>Rp {product.price}</h5>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await getClientPromise();
    const db = client.db("ecommerce");
    const item = await db
      .collection("products")
      .findOne({ _id: new ObjectId(params.id) });

    if (!item) {
      return { props: { product: null } };
    }

    const product = { ...item, _id: item._id.toString() };

    return { props: { product } };
  } catch {
    return { props: { product: null } };
  }
}
