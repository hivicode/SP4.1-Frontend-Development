export default async function Products() {
  let products = [];
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="container mt-5">
      <h2>Daftar Produk</h2>
      {products.length === 0 ? (
        <p>Tidak ada produk atau error koneksi database.</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.map((prod) => (
            <div
              key={prod.id}
              className="card"
              style={{ width: "18rem" }}
            >
              {/* Supports both db structures just in case! */}
              {(prod.gambar || prod.image) && (
                <img 
                  src={prod.gambar || prod.image} 
                  className="card-img-top" 
                  alt={prod.nama || prod.name} 
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{prod.nama || prod.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Rp {prod.harga || prod.price}
                </h6>
                <p className="card-text">{prod.deskripsi || prod.description}</p>
                <button className="btn btn-primary">Tambah ke Keranjang</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
