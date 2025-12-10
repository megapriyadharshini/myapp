// src/pages/ProductDetails.jsx
import { useParams, useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Smartphone", price: 17999, category: "Electronics", description: "A fast phone with a great camera.", specs: ["6.5-inch OLED", "8GB RAM", "128GB Storage"] },
  { id: 2, name: "Running Shoes", price: 2999, category: "Footwear", description: "Lightweight shoes designed for runners.", specs: ["Breathable Mesh", "Foam Cushion"] },
  { id: 3, name: "Backpack", price: 1299, category: "Bags", description: "Perfect for college and travel.", specs: ["20L Capacity", "Water-resistant"] },
  { id: 4, name: "Bluetooth Speaker", price: 2499, category: "Electronics", description: "High bass portable speaker.", specs: ["10W Sound", "10-hour Battery Life"] }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 14px",
          borderRadius: "5px",
          border: "none",
          background: "#333",
          color: "white"
        }}
      >
        ← Back
      </button>

      <h1>{product.name}</h1>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>

      <h3>Specifications</h3>
      <ul>
        {product.specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
