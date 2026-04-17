import { MongoClient } from "mongodb";

let clientPromise;

function getClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI belum diset. Buat file .env.local dan isi MONGODB_URI."
    );
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export default getClientPromise;
