// src/pages/Product.jsx
// src/pages/Product.jsx
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: 17999, category: "Electronics", description: "A fast phone with a great camera." },
  { id: 2, name: "Running Shoes", price: 2999, category: "Footwear", description: "Lightweight shoes for daily running." },
  { id: 3, name: "Backpack", price: 1299, category: "Bags", description: "Durable 20L water-resistant backpack." },
  { id: 4, name: "Bluetooth Speaker", price: 2499, category: "Electronics", description: "Portable speaker with deep bass." }
];

const Product = () => {
  return (
    <div>
      <h1>Our Projects – Products</h1>
      <p>Click a product to view complete details.</p>

      <div className="product-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p.id} className="product-card" style={{ border: "1px solid #ccc", padding: "15px", width: "220px", borderRadius: "8px" }}>
            <h3>{p.name}</h3>
            <p><strong>Category:</strong> {p.category}</p>
            <p><strong>Price:</strong> ₹{p.price}</p>
            <p>{p.description}</p>

            <Link
              to={`/products/${p.id}`}
              style={{
                textDecoration: "none",
                color: "white",
                background: "#007bff",
                padding: "6px 12px",
                borderRadius: "5px"
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
