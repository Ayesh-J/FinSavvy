import React from "react";
import './About.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
    return (
        <>
          <section className="About">
                <div className="About__container">
                    <h1 className="About__title">About Us</h1>
                    <p className="About__text">
                        Welcome to <strong>FinSavvy</strong>, your trusted partner in financial services. 
                        We are committed to providing innovative solutions to help you achieve your financial goals. 
                        Our team of experts works tirelessly to ensure your success, offering personalized services tailored to your needs.
                    </p>
                    <p className="About__text">
                        At FinSavvy, we believe in empowering individuals and businesses with the tools and knowledge 
                        they need to thrive in today’s dynamic financial landscape. Join us on this journey to financial excellence.
                    </p>
                    <div className="About__btn-row">
                        <a href="/services" className="About__btn">Our Services</a>
                        <a href="/contact" className="About__btn About__btn--outline">Contact Us</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;