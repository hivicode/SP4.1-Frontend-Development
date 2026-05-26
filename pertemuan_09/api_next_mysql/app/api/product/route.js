import pool from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM product");

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { kode, nama } = body;

    await pool.query("INSERT INTO product (kode, nama) VALUES (?, ?)", [
      kode,
      nama,
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Produk berhasil ditambahkan",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
