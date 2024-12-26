import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams(); // Extract the product ID from the URL

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>This page displays details for the selected product.</p>
    </div>
  );
}

export default ProductDetailPage;