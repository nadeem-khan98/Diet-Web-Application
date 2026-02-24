import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h2> Product Details</h2>

      <p>
        <strong>Name:</strong> {product.product_name || "Not Available"}
      </p>

      <p>
        <strong>Brand:</strong> {product.brands || "Not Available"}
      </p>

      <h3>📊 Nutrition per 100g</h3>

      <p>
        <strong>Calories:</strong>{" "}
        {product.nutriments["energy-kcal_100g"] || "N/A"} kcal
      </p>

      <p>
        <strong>Protein:</strong> {product.nutriments.proteins_100g || "N/A"} g
      </p>

      <p>
        <strong>Fat:</strong> {product.nutriments.fat_100g || "N/A"} g
      </p>

      <p>
        <strong>Carbs:</strong>{" "}
        {product.nutriments.carbohydrates_100g || "N/A"} g
      </p>
    </div>
  );
};

export default ProductCard;
