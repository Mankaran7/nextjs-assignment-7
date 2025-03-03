/*export default async function Home() {
  console.log("Fetching with force-cache...");
  const resCache = await fetch("http://localhost:3000/api/data", { cache: "force-cache" });
  const dataCache = await resCache.json();

  console.log("Fetching with no-store...");
  const resNoStore = await fetch("http://localhost:3000/api/data", { cache: "no-store" });
  const dataNoStore = await resNoStore.json();

  return (
    <div>
      <h1>Data Memoization Test</h1>
      <p>Force-Cache Response: {dataCache.message}</p>
      <p>No-Store Response: {dataNoStore.message}</p>
    </div>
  );
}*/
// app/page.js (or any other component)
/*"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Images</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Image
              src={product.thumbnail} 
              alt={product.title}
              width={200}
              height={200}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;*/
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';


const Popup = dynamic(() => import('./components/Popup'));

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)}>Open Pop-up</button>

      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default HomePage;

