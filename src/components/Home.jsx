import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    return (
        <>
             {/* Navbar */}
             <section className="navbar">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src="/src/assets/Logo.png" alt="logo" className="navbar__logo-img" />
                        <h1 className="navbar__logo-text">FinSavvy</h1>
                    </div>
                    <div className="navbar__items">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="./About">About</a></li>
                            <li><a href="./Dashboard">Dashboard</a></li>
                            <li><a href="./Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__content">
                        <h1 className="hero__title">Welcome to <span>FinSavvy</span></h1>
                        <p className="hero__subtitle">
                            We provide the best financial services to help you achieve your financial goals.
                        </p>
                        <div className="hero__btn-row">
                            <Link to="/Services" className="hero__btn">Our Services</Link>
                            <Link to="/About" className="hero__btn hero__btn--outline">About Us</Link>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src="/src/assets/Logo.png" alt="Financial Success" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;