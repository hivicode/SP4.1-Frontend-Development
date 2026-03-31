import { connect } from "@/lib/db";

export async function GET() {
  try {
    const db = await connect();
    const [rows] = await db.execute("SELECT * FROM products");
    await db.end();
    return Response.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
