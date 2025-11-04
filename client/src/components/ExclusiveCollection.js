import React from "react";
import "./ExclusiveCollection.css";
import img1 from "../assets/banner1.jpg.png";
import img2 from "../assets/banner2.jpg.png";
import img3 from "../assets/banner3.jpg.png";

const collections = [
  { id: 1, title: "Festive Elegance", img: img1 },
  { id: 2, title: "Casual Grace", img: img2 },
  { id: 3, title: "Heritage Touch", img: img3 },
];

const ExclusiveCollection = () => {
  return (
    <section className="exclusive-section" id="collections">
      <h2 className="exclusive-title">Exclusive Collections</h2>
      <div className="collection-scroll">
        {collections.map((item) => (
          <div className="collection-card" key={item.id}>
            <img src={item.img} alt={item.title} className="collection-img" />
            <h3>{item.title}</h3>
            <button>Explore Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveCollection;
