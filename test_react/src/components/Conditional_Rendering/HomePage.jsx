import React from 'react'
import './HomePage.scss';
export default function HomePage({ onLogout }) {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page.</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
