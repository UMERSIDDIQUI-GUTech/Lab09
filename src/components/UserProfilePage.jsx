import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function UserProfilePage() {
  const { username } = useParams(); // Extract the username from the URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default UserProfilePage;