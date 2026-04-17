import { ObjectId } from "mongodb";
import getClientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await getClientPromise();
    const db = client.db("ecommerce");
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(req.query.id) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
