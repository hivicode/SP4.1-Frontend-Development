import { db } from "@/app/lib/db";

export async function GET() {
  const rows = await db.query("SELECT * FROM products");
  return Response.json(rows);
}
