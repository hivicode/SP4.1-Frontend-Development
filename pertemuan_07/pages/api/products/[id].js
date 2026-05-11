import clientPromise from '../../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('ecommerce');
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
    res.status(200).json(product);
  } else {
    res.status(405).end();
  }
}
