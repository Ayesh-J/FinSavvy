import React from "react";
import './Services.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
 return(
    <>
      <section className="Services">
                <div className="Services__container">
                    <h1 className="Services__title">Our Services</h1>
                    <p className="Services__description">
                        At <strong>FinSavvy</strong>, we offer a wide range of financial services tailored to meet your needs. 
                        Explore our premium services designed to help you achieve your financial goals.
                    </p>
                    <div className="Services__cards">
                        <div className="Services__card">
                            <h2 className="Services__card-title">Financial Planning</h2>
                            <p className="Services__card-text">
                                Comprehensive financial planning to secure your future and achieve your goals.
                            </p>
                        </div>
                        <div className="Services__card">
                            <h2 className="Services__card-title">Investment Management</h2>
                            <p className="Services__card-text">
                                Expert investment strategies to grow your wealth and maximize returns.
                            </p>
                        </div>
                        <div className="Services__card">
                            <h2 className="Services__card-title">Financial Literacy Courses</h2>
                            <p className="Services__card-text">
                                Be a Financial expert with our courses and make informed decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
 )
}

export default Services;