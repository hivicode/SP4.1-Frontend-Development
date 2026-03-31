async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <h1>E-Commerce Dengan Next.js</h1>
      {products.length === 0 ? (
        <p>Tidak ada produk atau error koneksi database.</p>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((prod) => (
            <div
              key={prod.id}
              style={{ border: "1px solid #ccc", padding: 20 }}
            >
              <img src={prod.gambar} alt={prod.nama} width={150} />
              <h3>{prod.nama}</h3>
              <p>{prod.harga}</p>
              <p>{prod.deskripsi}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
