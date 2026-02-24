import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { getProductByBarcode } from "../services/openFoodApi";
import ProductCard from "./ProductCard";

const BarcodeScanner = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  // Fetch Product Function
  const fetchProduct = async (barcode) => {
    try {
      setError("");

      const data = await getProductByBarcode(barcode);

      if (data.status === 1) {
        setProduct(data.product);
      } else {
        setProduct(null);
        setError("❌ Product not found in OpenFoodFacts!");
      }
    } catch (err) {
      setError("⚠️ Error fetching product data.");
    }
  };

  // Scanner Setup
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    scanner.render(
      (result) => {
        scanner.clear(); // Stop after scan
        fetchProduct(result);
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div>
      <h2>📷 Scan Your Food Barcode</h2>

      {/* Scanner Box */}
      <div id="reader" style={{ width: "320px", margin: "auto" }}></div>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Product Info */}
      {product && <ProductCard product={product} />}
    </div>
  );
};

export default BarcodeScanner;
