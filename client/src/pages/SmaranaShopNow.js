// src/pages/SmaranShopNow.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SmaranaShopNow.css";

// temporary demo products (will later come from admin backend)
const demoProducts = [
  {
    id: 1,
    name: "Elegant Saree",
    price: "₹2,499",
    image: "https://via.placeholder.com/300x400?text=Elegant+Saree",
  },
  {
    id: 2,
    name: "Traditional Kurta",
    price: "₹1,999",
    image: "https://via.placeholder.com/300x400?text=Traditional+Kurta",
  },
  {
    id: 3,
    name: "Festive Dress",
    price: "₹3,499",
    image: "https://via.placeholder.com/300x400?text=Festive+Dress",
  },
  {
    id: 4,
    name: "Classic Dupatta",
    price: "₹999",
    image: "https://via.placeholder.com/300x400?text=Classic+Dupatta",
  },
  {
    id: 5,
    name: "Casual Top",
    price: "₹799",
    image: "https://via.placeholder.com/300x400?text=Casual+Top",
  },
  {
    id: 6,
    name: "Anarkali Set",
    price: "₹2,899",
    image: "https://via.placeholder.com/300x400?text=Anarkali+Set",
  },
];

const SmaranaShopNow = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = demoProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="shopnow-container">
        <h1 className="shopnow-header">🌸Shop Now🌸</h1>

        {/* Search Bar */}
        <div className="shopnow-search">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SmaranaShopNow;
