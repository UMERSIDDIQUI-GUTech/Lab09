import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/product/123'); 
  };

  return (
    <div>
      <h1>Welcome to Our E-Commerce Platform</h1>
      <p>Explore our wide range of products!</p>
      <button onClick={goToProducts}>View Product Details</button>
    </div>
  );
}

export default HomePage;