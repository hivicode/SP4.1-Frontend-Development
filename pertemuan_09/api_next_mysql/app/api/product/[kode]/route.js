import pool from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { kode } = await params;
    const [rows] = await pool.query("SELECT * FROM product WHERE kode = ?", [
      kode,
    ]);

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Produk tidak ditemukan",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: rows[0],
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

export async function PUT(request, { params }) {
  try {
    const { kode } = await params;
    const body = await request.json();
    const { nama } = body;

    await pool.query("UPDATE product SET nama = ? WHERE kode = ?", [
      nama,
      kode,
    ]);

    return NextResponse.json({
      success: true,
      message: "Produk berhasil diupdate",
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

export async function DELETE(request, { params }) {
  try {
    const { kode } = await params;

    await pool.query("DELETE FROM product WHERE kode = ?", [kode]);

    return NextResponse.json({
      success: true,
      message: "Produk berhasil dihapus",
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
