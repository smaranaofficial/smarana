// src/pages/SmaranShopNow.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SmaranaShopNow.css";
import products from "../data/products";


const SmaranaShopNow = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // 👈 navigate to product details
  };

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
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
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
