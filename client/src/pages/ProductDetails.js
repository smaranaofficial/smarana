// src/pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products"; // <-- import your real product list

const ProductDetails = () => {
  const { id } = useParams(); // GET ID from URL like /product/3

  const product = products.find((p) => p.id === Number(id)); // find product by id

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "8rem", textAlign: "center" }}>
          <h2>Product Not Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="product-details">
        <div className="product-left">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-right">
          <h1 className="product-title">{product.name}</h1>

          <p className="product-desc">{product.description}</p>

          <p className="product-price">{product.price}</p>

          <div className="product-sizes">
            <label>Available Sizes:</label>
            <div className="size-options">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

    </>
  );
};

export default ProductDetails;
